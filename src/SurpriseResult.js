
// import React, { useEffect, useState } from "react";
// import { Card, Typography, Button } from "antd";
// import Confetti from "react-confetti";
// import { useWindowSize } from "react-use";

// const { Title, Paragraph } = Typography;

// const collageImages = [
//     "/my-test/images-webp/1.webp",
//     "/my-test/images-webp/2.webp",
//     "/my-test/images-webp/3.webp",
//     "/my-test/images-webp/4.webp",
//     "/my-test/images-webp/5.webp",
//     "/my-test/images-webp/6.webp",
//     "/my-test/images-webp/7.webp",
//     "/my-test/images-webp/8.webp",
//     "/my-test/images-webp/9.webp",
//     "/my-test/images-webp/10.webp",
//     "/my-test/images-webp/11.webp",
//     "/my-test/images-webp/12.webp",
//     "/my-test/images-webp/13.webp",
//     "/my-test/images-webp/14.webp",
//     "/my-test/images-webp/15.webp",
//     "/my-test/images-webp/16.webp"
// ];


// function SurpriseResult() {
//     const [show, setShow] = useState(false);
//     const { width, height } = useWindowSize();

//     useEffect(() => {
//         const timer = setTimeout(() => setShow(true), 2000);
//         return () => clearTimeout(timer);
//     }, []);

//     return (
//         <div
//             style={{
//                 position: "relative",
//                 height: "100vh",
//                 width: "100%",
//                 overflow: "hidden",
//                 backgroundColor: "#fffbec", // 🎨 Soft celebration color
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 padding: "1rem",
//                 boxSizing: "border-box"
//             }}
//         >
//             {/* 🎉 Animated Confetti */}
//             <Confetti
//                 width={width}
//                 height={height}
//                 numberOfPieces={250}
//                 recycle={true}
//                 gravity={0.1}
//             />

//             {/* 🖼️ Collage Images */}
//             {collageImages.map((src, index) => (
//                 <img
//                     key={index}
//                     src={src}
//                     alt=""
//                     loading="lazy"
//                     style={{
//                         position: "absolute",
//                         top: `${Math.random() * 80}%`,
//                         left: `${Math.random() * 80}%`,
//                         width: `${40 + Math.random() * 60}px`,
//                         opacity: 0.45,
//                         transform: `rotate(${Math.random() * 30 - 15}deg)`, // ✅ gentle rotation
//                         pointerEvents: "none",
//                         zIndex: 1
//                     }}
//                 />
//             ))}


//             {/* 🎁 Surprise Card */}
//             {show && (
//                 <Card
//                     bordered={false}
//                     style={{
//                         zIndex: 2,
//                         maxWidth: 400,
//                         width: "100%",
//                         textAlign: "center",
//                         backgroundColor: "#fffbe6",
//                         boxShadow: "0 8px 24px rgba(0,0,0,0.15)"
//                     }}
//                 >
//                     <Title level={1}>💍</Title>
//                     <Title level={2}>Benimle evlenir misin?</Title>

//                     <Button type="primary" size="large">
//                         Evet (bir zahmet)
//                     </Button>
//                     <Paragraph>
//                         <br />
//                     </Paragraph>
//                     <Paragraph>
//                         *Hayiır için bir seçenek sunmadım maalesef
//                     </Paragraph>
//                 </Card>
//             )}
//         </div>
//     );
// }

// export default SurpriseResult;



// import React, { useEffect, useState } from "react";
// import { Card, Typography, Button } from "antd";
// import Confetti from "react-confetti";
// import { useWindowSize } from "react-use";

// const { Title, Paragraph } = Typography;

// // All images
// const allCollageImages = [
//     "/my-test/images-webp/1.webp", "/my-test/images-webp/2.webp", "/my-test/images-webp/3.webp", "/my-test/images-webp/4.webp",
//     "/my-test/images-webp/5.webp", "/my-test/images-webp/6.webp", "/my-test/images-webp/7.webp", "/my-test/images-webp/8.webp",
//     "/my-test/images-webp/9.webp", "/my-test/images-webp/10.webp", "/my-test/images-webp/11.webp", "/my-test/images-webp/12.webp",
//     "/my-test/images-webp/13.webp", "/my-test/images-webp/14.webp", "/my-test/images-webp/15.webp", "/my-test/images-webp/16.webp"
// ];

// function SurpriseResult() {
//     const [show, setShow] = useState(false);
//     const [imageStyles, setImageStyles] = useState([]);
//     const { width, height } = useWindowSize();

//     useEffect(() => {
//         // Shuffle and pick 8 random images
//         const shuffled = [...allCollageImages].sort(() => 0.5 - Math.random());
//         const selected = shuffled.slice(0, 16);

//         // Precompute style info
//         const styles = selected.map((src) => ({
//             src,
//             top: `${Math.random() * 80}%`,
//             left: `${Math.random() * 80}%`,
//             width: `${40 + Math.random() * 60}px`,
//             rotate: `${Math.random() * 30 - 15}deg`
//         }));

//         setImageStyles(styles);

//         // Delay the card display
//         const timer = setTimeout(() => setShow(true), 2000);
//         return () => clearTimeout(timer);
//     }, []);

//     return (
//         <div
//             style={{
//                 position: "relative",
//                 height: "100vh",
//                 width: "100%",
//                 overflow: "hidden",
//                 backgroundColor: "#fffbec",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 padding: "1rem",
//                 boxSizing: "border-box"
//             }}
//         >
//             {/* 🎉 Animated Confetti */}
//             <Confetti
//                 width={width}
//                 height={height}
//                 numberOfPieces={250}
//                 recycle={true}
//                 gravity={0.1}
//             />

//             {/* 🖼️ Optimized Collage */}
//             {imageStyles.map((img, index) => (
//                 <img
//                     key={index}
//                     src={img.src}
//                     alt=""
//                     loading="lazy"
//                     style={{
//                         position: "absolute",
//                         top: img.top,
//                         left: img.left,
//                         width: img.width,
//                         opacity: 0.45,
//                         transform: `rotate(${img.rotate})`,
//                         pointerEvents: "none",
//                         zIndex: 1
//                     }}
//                 />
//             ))}

//             {/* 🎁 Surprise Card */}
//             {show && (
//                 <Card
//                     bordered={false}
//                     style={{
//                         zIndex: 2,
//                         maxWidth: 400,
//                         width: "100%",
//                         textAlign: "center",
//                         backgroundColor: "#fffbe6",
//                         boxShadow: "0 8px 24px rgba(0,0,0,0.15)"
//                     }}
//                 >
//                     <Title level={1}>💍</Title>
//                     <Title level={2}>Benimle evlenir misin?</Title>

//                     <Button type="primary" size="large">
//                         Evet (bir zahmet)
//                     </Button>
//                     <Paragraph>
//                         <br />
//                     </Paragraph>
//                     <Paragraph>
//                         *Hayıır için bir seçenek sunmadım maalesef
//                     </Paragraph>
//                 </Card>
//             )}
//         </div>
//     );
// }

// export default SurpriseResult;



// import React, { useEffect, useState, useRef } from "react";

// import { Card, Typography, Button } from "antd";
// import Confetti from "react-confetti";
// import { useWindowSize } from "react-use";

// const { Title, Paragraph } = Typography;

// const collageImages = [
//     "/my-test/images-webp/1.webp", "/my-test/images-webp/2.webp", "/my-test/images-webp/3.webp", "/my-test/images-webp/4.webp",
//     "/my-test/images-webp/5.webp", "/my-test/images-webp/6.webp", "/my-test/images-webp/7.webp", "/my-test/images-webp/8.webp",
//     "/my-test/images-webp/9.webp", "/my-test/images-webp/10.webp", "/my-test/images-webp/11.webp", "/my-test/images-webp/12.webp",
//     "/my-test/images-webp/13.webp", "/my-test/images-webp/14.webp", "/my-test/images-webp/15.webp", "/my-test/images-webp/16.webp"
// ];

// function SurpriseResult() {
//     const [showCard, setShowCard] = useState(false);
//     const { width, height } = useWindowSize();

//     // Track loaded images by their index
//     const [loadedIndexes, setLoadedIndexes] = useState(new Set());

//     const [imageData, setImageData] = useState([]);

//     useEffect(() => {
//         const shuffled = [...collageImages].sort(() => 0.5 - Math.random()).slice(0, 12);
//         const withStyles = shuffled.map((src) => ({
//             src,
//             style: {
//                 top: `${Math.random() * 80}%`,
//                 left: `${Math.random() * 80}%`,
//                 width: `${40 + Math.random() * 60}px`,
//                 transform: `rotate(${Math.random() * 20 - 10}deg)`
//             }
//         }));
//         setImageData(withStyles);
//     }, []);

//     const cardShown = useRef(false);

//     useEffect(() => {
//         if (imageData.length > 0 && loadedIndexes.size === imageData.length) {
//             if (!cardShown.current) {
//                 cardShown.current = true;
//                 const timeout = setTimeout(() => setShowCard(true), 600);
//                 return () => clearTimeout(timeout);
//             }
//         }
//     }, [loadedIndexes, imageData]);

//     // Handler for image load
//     const onImageLoad = (index) => {
//         setLoadedIndexes((prev) => new Set(prev).add(index));
//     };

//     return (
//         <div
//             style={{
//                 position: "relative",
//                 height: "100vh",
//                 width: "100%",
//                 overflow: "hidden",
//                 backgroundColor: "#fffbec",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 padding: "1rem",
//                 boxSizing: "border-box"
//             }}
//         >
//             <Confetti
//                 width={width}
//                 height={height}
//                 numberOfPieces={250}
//                 recycle={true}
//                 gravity={0.1}
//             />

//             {imageData.map((img, index) => (
//                 <img
//                     key={index}
//                     src={img.src}
//                     alt=""
//                     loading="lazy"
//                     onLoad={() => onImageLoad(index)}
//                     style={{
//                         position: "absolute",
//                         ...img.style,
//                         opacity: loadedIndexes.has(index) ? 0.45 : 0,
//                         transition: "opacity 1s ease",
//                         pointerEvents: "none",
//                         zIndex: 1
//                     }}
//                 />
//             ))}

//             {showCard && (
//                 <div style={{ opacity: showCard ? 1 : 0, transition: "opacity 1s ease", zIndex: 2 }}>
//                     <Card
//                         bordered={false}
//                         style={{
//                             maxWidth: 400,
//                             width: "100%",
//                             textAlign: "center",
//                             backgroundColor: "#fffbe6",
//                             boxShadow: "0 8px 24px rgba(0,0,0,0.15)"
//                         }}
//                     >
//                         <Title level={1}>💍</Title>
//                         <Title level={2}>Benimle evlenir misin?</Title>

//                         <Button type="primary" size="large">Evet (bir zahmet)</Button>
//                         <Paragraph><br /></Paragraph>
//                         <Paragraph>*Hayır için bir seçenek sunmadım maalesef</Paragraph>
//                     </Card>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default SurpriseResult;








import React, { useEffect, useState, useRef } from "react";
import { Card, Typography, Button } from "antd";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const { Title, Paragraph } = Typography;

const collageImages = [
    "/my-test/images-webp/1.webp", "/my-test/images-webp/2.webp", "/my-test/images-webp/3.webp", "/my-test/images-webp/4.webp",
    "/my-test/images-webp/5.webp", "/my-test/images-webp/6.webp", "/my-test/images-webp/7.webp", "/my-test/images-webp/8.webp",
    "/my-test/images-webp/9.webp", "/my-test/images-webp/10.webp", "/my-test/images-webp/11.webp", "/my-test/images-webp/12.webp",
    "/my-test/images-webp/13.webp", "/my-test/images-webp/14.webp", "/my-test/images-webp/15.webp", "/my-test/images-webp/16.webp"
];

function SurpriseResult() {
    const [showCard, setShowCard] = useState(false);
    const { width, height } = useWindowSize();

    // Track loaded images by their index
    const [loadedIndexes, setLoadedIndexes] = useState(new Set());
    const [imageData, setImageData] = useState([]);

    const cardShown = useRef(false);

    useEffect(() => {
        const maxAttempts = 100; // max retries to find non-overlapping spot
        const placedRects = []; // {top, left, width, height} in px

        // Check if two rectangles overlap (with optional padding)
        const isOverlapping = (r1, r2, padding = 10) => {
            return !(
                r1.left + r1.width + padding < r2.left ||
                r1.left > r2.left + r2.width + padding ||
                r1.top + r1.height + padding < r2.top ||
                r1.top > r2.top + r2.height + padding
            );
        };

        // Container size (viewport minus some padding)
        const containerWidth = window.innerWidth - 32;
        const containerHeight = window.innerHeight - 32;

        const imagesToPlace = [...collageImages].sort(() => 0.5 - Math.random()).slice(0, 12);
        const withStyles = [];

        imagesToPlace.forEach((src) => {
            let attempt = 0;
            let topPx, leftPx;
            const widthPx = 40 + Math.random() * 60; // random width between 40-100px
            const heightPx = widthPx; // assuming square images, adjust if needed

            do {
                topPx = Math.random() * (containerHeight - heightPx);
                leftPx = Math.random() * (containerWidth - widthPx);

                const newRect = { top: topPx, left: leftPx, width: widthPx, height: heightPx };

                const overlapping = placedRects.some((r) => isOverlapping(r, newRect));

                if (!overlapping) {
                    placedRects.push(newRect);
                    withStyles.push({
                        src,
                        style: {
                            top: `${(topPx / containerHeight) * 100}%`,
                            left: `${(leftPx / containerWidth) * 100}%`,
                            width: `${widthPx}px`,
                            transform: `rotate(${Math.random() * 20 - 10}deg)`
                        }
                    });
                    break;
                }

                attempt++;
            } while (attempt < maxAttempts);

            if (attempt === maxAttempts) {
                // fallback: add anyway
                withStyles.push({
                    src,
                    style: {
                        top: `${(topPx / containerHeight) * 100}%`,
                        left: `${(leftPx / containerWidth) * 100}%`,
                        width: `${widthPx}px`,
                        transform: `rotate(${Math.random() * 20 - 10}deg)`
                    }
                });
            }
        });

        setImageData(withStyles);
    }, []);

    useEffect(() => {
        if (imageData.length > 0 && loadedIndexes.size === imageData.length) {
            if (!cardShown.current) {
                cardShown.current = true;
                const timeout = setTimeout(() => setShowCard(true), 600);
                return () => clearTimeout(timeout);
            }
        }
    }, [loadedIndexes, imageData]);

    const onImageLoad = (index) => {
        setLoadedIndexes((prev) => new Set(prev).add(index));
    };

    return (
        <div
            style={{
                position: "relative",
                height: "100vh",
                width: "100%",
                overflow: "hidden",
                backgroundColor: "#fffbec",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem",
                boxSizing: "border-box"
            }}
        >
            <Confetti
                width={width}
                height={height}
                numberOfPieces={200}
                recycle={true}
                gravity={0.1}
            />

            {imageData.map((img, index) => (
                <img
                    key={index}
                    src={img.src}
                    alt=""
                    loading="lazy"
                    onLoad={() => onImageLoad(index)}
                    style={{
                        position: "absolute",
                        ...img.style,
                        opacity: loadedIndexes.has(index) ? 0.45 : 0,
                        transition: "opacity 1s ease",
                        pointerEvents: "none",
                        zIndex: 1
                    }}
                />
            ))}

            {showCard && (
                <div style={{ opacity: showCard ? 1 : 0, transition: "opacity 1s ease", zIndex: 2 }}>
                    <Card
                        bordered={false}
                        style={{
                            maxWidth: 400,
                            width: "100%",
                            textAlign: "center",
                            backgroundColor: "#fffbe6",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.15)"
                        }}
                    >
                        <Title level={1}>💍</Title>
                        <Title level={2}>Benimle evlenir misin?</Title>

                        <Button type="primary" size="large">Evet (bir zahmet)</Button>
                        <Paragraph><br /></Paragraph>
                        <Paragraph>*Hayır için bir seçenek sunmadım maalesef</Paragraph>
                    </Card>
                </div>
            )}
        </div>
    );
}

export default SurpriseResult;
