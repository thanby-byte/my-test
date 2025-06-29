import React, { useEffect, useState, useRef, useCallback } from "react";
import { Card, Typography, Button } from "antd";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

const { Title, Paragraph } = Typography;

// It's highly recommended to have smaller, optimized versions of these images.
// For example, images that are ~200px on the longest side.
const collageImages = Array.from({ length: 19 }, (_, i) =>
    `${process.env.PUBLIC_URL}/images-webp/${i + 1}.webp`
);


const MAX_IMAGES = 25;
const IMAGE_LOAD_DELAY = 200; // Delay in ms between loading each image

const SurpriseResult = () => {
    const [showCard, setShowCard] = useState(false);
    const [imageData, setImageData] = useState([]);
    const [imagesToLoad, setImagesToLoad] = useState([]);
    const [loadedCount, setLoadedCount] = useState(0);
    const { width = 360, height = 640 } = useWindowSize();
    const cardShown = useRef(false);
    const containerRef = useRef(null);
    const CARD_WIDTH = 360;
    const CARD_HEIGHT = 300;

    const generateImageData = useCallback(() => {
        if (!containerRef.current) return;

        const containerW = containerRef.current.clientWidth;
        const containerH = containerRef.current.clientHeight;

        const images = [...collageImages].sort(() => Math.random() - 0.5);
        const placedRects = [];
        const styles = [];

        // Calculate card area boundaries (centered)
        const cardLeft = (containerW - CARD_WIDTH) / 2;
        const cardTop = (containerH - CARD_HEIGHT) / 2;
        const cardRight = cardLeft + CARD_WIDTH;
        const cardBottom = cardTop + CARD_HEIGHT;

        for (let src of images) {
            if (styles.length >= MAX_IMAGES) break;

            let attempt = 0;
            const w = 60 + 30;
            const h = w;

            while (attempt < 200) {
                const top = Math.random() * (containerH - h);
                const left = Math.random() * (containerW - w);

                const newRect = { top, left, width: w, height: h };

                // Check overlap with other images (with 8px margin)
                const overlapsImages = placedRects.some((r) => {
                    return !(
                        r.left + r.width + 8 < newRect.left ||
                        r.left > newRect.left + newRect.width + 8 ||
                        r.top + r.height + 8 < newRect.top ||
                        r.top > newRect.top + newRect.height + 8
                    );
                });

                // Check overlap with card area (with 8px margin)
                const overlapsCard = !(
                    newRect.left + newRect.width + 8 < cardLeft ||
                    newRect.left > cardRight + 8 ||
                    newRect.top + newRect.height + 8 < cardTop ||
                    newRect.top > cardBottom + 8
                );

                if (!overlapsImages && !overlapsCard) {
                    placedRects.push(newRect);
                    styles.push({
                        src,
                        style: {
                            top: `${(top / containerH) * 100}%`,
                            left: `${(left / containerW) * 100}%`,
                            width: `${w}px`,
                            transform: `rotate(${Math.random() * 10 - 5}deg)`,
                        },
                    });
                    break;
                }
                attempt++;
            }
        }
        setImageData(styles);
    }, []);

    // Effect to generate image data on mount and window resize
    useEffect(() => {
        generateImageData();
    }, [generateImageData, width, height]);

    // Effect to progressively load images
    useEffect(() => {
        if (imageData.length > 0) {
            let timeoutId;
            let currentImageIndex = 0;

            const loadNextImage = () => {
                if (currentImageIndex < imageData.length) {
                    setImagesToLoad((prev) => [...prev, currentImageIndex]);
                    currentImageIndex++;
                    timeoutId = setTimeout(loadNextImage, IMAGE_LOAD_DELAY);
                }
            };

            loadNextImage();

            // Cleanup function to clear the timeout
            return () => clearTimeout(timeoutId);
        }
    }, [imageData]); // Runs when imageData is set

    // Effect to show the card when all images are loaded
    useEffect(() => {
        if (loadedCount === imageData.length && imageData.length > 0 && !cardShown.current) {
            cardShown.current = true;
            setTimeout(() => setShowCard(true), 400);
        }
    }, [loadedCount, imageData]);

    const handleImageLoad = useCallback(() => {
        setLoadedCount((prev) => prev + 1);
    }, []);

    return (
        <div style={styles.container} ref={containerRef}>


            <Confetti
                width={width}
                height={height}
                numberOfPieces={120}
                recycle={true}
                gravity={0.10}
                friction={0.99}
            // run={true}
            />

            {imageData.map((img, i) => (
                <img
                    key={i}
                    src={img.src}
                    alt={`Surprise ${i + 1}`}
                    onLoad={handleImageLoad}
                    style={{
                        ...img.style,
                        position: "absolute",
                        // Only set opacity to 0.45 if the image is in the `imagesToLoad` array
                        opacity: imagesToLoad.includes(i) ? 0.85 : 0,
                        transition: "opacity 0.8s ease",
                        pointerEvents: "none",
                        zIndex: 1
                        //  maxWidth: "95%",
                    }}
                />
            ))}

            {showCard && (
                <div style={{ ...styles.cardWrapper, opacity: showCard ? 1 : 0 }}>
                    <Card bordered={false} style={styles.card}>
                        <Title level={2} style={{ fontSize: "4rem", margin: 0 }}>💍</Title>
                        <Title level={2} >Benimle evlenir misin?</Title>
                        <Button
                            style={{ ...styles.button }}
                            type="primary"
                            size="large"
                            onClick={(e) => {
                                e.preventDefault();
                                console.log("Yes clicked!");
                            }}
                        >
                            Evet (bir zahmet)
                        </Button>
                        <Paragraph><br /></Paragraph>
                        <Paragraph>*Hayır için bir seçenek sunmadım maalesef</Paragraph>
                        <Paragraph>*Evet butonu da bir şey yapmıyor cevabını bana söyleyeceksin...</Paragraph>

                    </Card>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#fffbec",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.5rem",
        boxSizing: "border-box",
        touchAction: "manipulation",
    },
    cardWrapper: {
        zIndex: 2,
        transition: "opacity 0.8s ease",
    },
    card: {
        maxWidth: 360,
        width: "100%",
        textAlign: "center",
        backgroundColor: "#fffbe6",
        boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
        fontSize: "90%",
    },
    button: {
        backgroundColor: "#555879"
    },
};

export default SurpriseResult;