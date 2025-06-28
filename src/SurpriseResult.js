
// import React, { useEffect, useState } from "react";
// import { Card, Typography, Button } from "antd";
// import Confetti from "react-confetti";
// import { useWindowSize } from "react-use";

// const { Title, Paragraph } = Typography;

// const collageImages = [
//     "/images-webp/1.webp",
//     "/images-webp/2.webp",
//     "/images-webp/3.webp",
//     "/images-webp/4.webp",
//     "/images-webp/5.webp",
//     "/images-webp/6.webp",
//     "/images-webp/7.webp",
//     "/images-webp/8.webp",
//     "/images-webp/9.webp",
//     "/images-webp/10.webp",
//     "/images-webp/11.webp",
//     "/images-webp/12.webp",
//     "/images-webp/13.webp",
//     "/images-webp/14.webp",
//     "/images-webp/15.webp",
//     "/images-webp/16.webp"
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
//     "/images-webp/1.webp", "/images-webp/2.webp", "/images-webp/3.webp", "/images-webp/4.webp",
//     "/images-webp/5.webp", "/images-webp/6.webp", "/images-webp/7.webp", "/images-webp/8.webp",
//     "/images-webp/9.webp", "/images-webp/10.webp", "/images-webp/11.webp", "/images-webp/12.webp",
//     "/images-webp/13.webp", "/images-webp/14.webp", "/images-webp/15.webp", "/images-webp/16.webp"
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
//     "/images-webp/1.webp", "/images-webp/2.webp", "/images-webp/3.webp", "/images-webp/4.webp",
//     "/images-webp/5.webp", "/images-webp/6.webp", "/images-webp/7.webp", "/images-webp/8.webp",
//     "/images-webp/9.webp", "/images-webp/10.webp", "/images-webp/11.webp", "/images-webp/12.webp",
//     "/images-webp/13.webp", "/images-webp/14.webp", "/images-webp/15.webp", "/images-webp/16.webp"
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








// import React, { useEffect, useState, useRef } from "react";
// import { Card, Typography, Button } from "antd";
// import Confetti from "react-confetti";
// import { useWindowSize } from "react-use";

// const { Title, Paragraph } = Typography;

// const collageImages = [
//     "/images-webp/1.webp", "/images-webp/2.webp", "/images-webp/3.webp", "/images-webp/4.webp",
//     "/images-webp/5.webp", "/images-webp/6.webp", "/images-webp/7.webp", "/images-webp/8.webp",
//     "/images-webp/9.webp", "/images-webp/10.webp", "/images-webp/11.webp", "/images-webp/12.webp",
//     "/images-webp/13.webp", "/images-webp/14.webp", "/images-webp/15.webp", "/images-webp/16.webp"
// ];

// function SurpriseResult() {
//     const [showCard, setShowCard] = useState(false);
//     const { width, height } = useWindowSize();

//     // Track loaded images by their index
//     const [loadedIndexes, setLoadedIndexes] = useState(new Set());
//     const [imageData, setImageData] = useState([]);

//     const cardShown = useRef(false);

//     useEffect(() => {
//         const maxAttempts = 100; // max retries to find non-overlapping spot
//         const placedRects = []; // {top, left, width, height} in px

//         // Check if two rectangles overlap (with optional padding)
//         const isOverlapping = (r1, r2, padding = 10) => {
//             return !(
//                 r1.left + r1.width + padding < r2.left ||
//                 r1.left > r2.left + r2.width + padding ||
//                 r1.top + r1.height + padding < r2.top ||
//                 r1.top > r2.top + r2.height + padding
//             );
//         };

//         // Container size (viewport minus some padding)
//         const containerWidth = window.innerWidth - 32;
//         const containerHeight = window.innerHeight - 32;

//         const imagesToPlace = [...collageImages].sort(() => 0.5 - Math.random()).slice(0, 12);
//         const withStyles = [];

//         imagesToPlace.forEach((src) => {
//             let attempt = 0;
//             let topPx, leftPx;
//             const widthPx = 40 + Math.random() * 60; // random width between 40-100px
//             const heightPx = widthPx; // assuming square images, adjust if needed

//             do {
//                 topPx = Math.random() * (containerHeight - heightPx);
//                 leftPx = Math.random() * (containerWidth - widthPx);

//                 const newRect = { top: topPx, left: leftPx, width: widthPx, height: heightPx };

//                 const overlapping = placedRects.some((r) => isOverlapping(r, newRect));

//                 if (!overlapping) {
//                     placedRects.push(newRect);
//                     withStyles.push({
//                         src,
//                         style: {
//                             top: `${(topPx / containerHeight) * 100}%`,
//                             left: `${(leftPx / containerWidth) * 100}%`,
//                             width: `${widthPx}px`,
//                             transform: `rotate(${Math.random() * 20 - 10}deg)`
//                         }
//                     });
//                     break;
//                 }

//                 attempt++;
//             } while (attempt < maxAttempts);

//             if (attempt === maxAttempts) {
//                 // fallback: add anyway
//                 withStyles.push({
//                     src,
//                     style: {
//                         top: `${(topPx / containerHeight) * 100}%`,
//                         left: `${(leftPx / containerWidth) * 100}%`,
//                         width: `${widthPx}px`,
//                         transform: `rotate(${Math.random() * 20 - 10}deg)`
//                     }
//                 });
//             }
//         });

//         setImageData(withStyles);
//     }, []);

//     useEffect(() => {
//         if (imageData.length > 0 && loadedIndexes.size === imageData.length) {
//             if (!cardShown.current) {
//                 cardShown.current = true;
//                 const timeout = setTimeout(() => setShowCard(true), 600);
//                 return () => clearTimeout(timeout);
//             }
//         }
//     }, [loadedIndexes, imageData]);

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
//                 backgroundColor: "#adb0d1",
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
//                 numberOfPieces={200}
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
//                             backgroundColor: "#F4EBD3",
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


// import React, { useEffect, useState, useRef } from "react";
// import { Card, Typography, Button } from "antd";
// import Confetti from "react-confetti";
// import { useWindowSize } from "react-use";

// const { Title, Paragraph } = Typography;

// // Load fewer images to reduce load pressure
// const collageImages = [
//     `${process.env.PUBLIC_URL}/images-webp/1.webp`,
//     `${process.env.PUBLIC_URL}/images-webp/2.webp`,
//     `${process.env.PUBLIC_URL}/images-webp/3.webp`,
//     `${process.env.PUBLIC_URL}/images-webp/4.webp`,
//     `${process.env.PUBLIC_URL}/images-webp/5.webp`,
//     `${process.env.PUBLIC_URL}/images-webp/6.webp`,
//     `${process.env.PUBLIC_URL}/images-webp/7.webp`,
//     `${process.env.PUBLIC_URL}/images-webp/8.webp`
// ];



// function SurpriseResult() {
//     const [showCard, setShowCard] = useState(false);
//     const [loadedIndexes, setLoadedIndexes] = useState(new Set());
//     const [imageData, setImageData] = useState([]);
//     const { width, height } = useWindowSize();
//     const cardShown = useRef(false);

//     useEffect(() => {
//         // Position images without overlap in limited set
//         const containerW = window.innerWidth - 32;
//         const containerH = window.innerHeight - 32;

//         const imgs = [...collageImages].sort(() => 0.5 - Math.random());
//         const placed = [], styles = [];

//         imgs.forEach((src, index) => {
//             if (styles.length >= 6) return; // max 6 images

//             let attempt = 0, topPx, leftPx;
//             const w = 40 + Math.random() * 60, h = w;

//             do {
//                 topPx = Math.random() * (containerH - h);
//                 leftPx = Math.random() * (containerW - w);
//                 const rect = { top: topPx, left: leftPx, width: w, height: h };
//                 const overlap = placed.some(r =>
//                     !(
//                         r.left + r.width + 10 < rect.left ||
//                         r.left > rect.left + rect.width + 10 ||
//                         r.top + r.height + 10 < rect.top ||
//                         r.top > rect.top + rect.height + 10
//                     )
//                 );
//                 if (!overlap) {
//                     placed.push(rect);
//                     styles.push({
//                         src,
//                         style: {
//                             top: `${(topPx / containerH) * 100}%`,
//                             left: `${(leftPx / containerW) * 100}%`,
//                             width: `${w}px`,
//                             transform: `rotate(${Math.random() * 20 - 10}deg)`
//                         }
//                     });
//                     break;
//                 }
//                 attempt++;
//             } while (attempt < 50);
//         });

//         setImageData(styles);
//     }, []);

//     useEffect(() => {
//         if (imageData.length > 0 && loadedIndexes.size === imageData.length && !cardShown.current) {
//             cardShown.current = true;
//             setTimeout(() => setShowCard(true), 600);
//         }
//     }, [loadedIndexes, imageData]);

//     return (
//         <div style={styles.container}>
//             <Confetti width={width} height={height} numberOfPieces={200} recycle gravity={0.1} />

//             {imageData.map((img, i) => (
//                 <img
//                     key={i}
//                     src={img.src}
//                     loading="lazy"
//                     onLoad={() => setLoadedIndexes(prev => new Set(prev).add(i))}
//                     style={{
//                         ...img.style,
//                         position: "absolute",
//                         opacity: loadedIndexes.has(i) ? 0.45 : 0,
//                         transition: "opacity 1s ease",
//                         pointerEvents: "none",
//                         zIndex: 1
//                     }}
//                 />
//             ))}

//             {showCard && (
//                 <div style={{ ...styles.cardWrapper, opacity: showCard ? 1 : 0 }}>
//                     <Card bordered={false} style={styles.card}>
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

// const styles = {
//     container: {
//         position: "relative",
//         height: "100vh",
//         width: "100%",
//         overflow: "hidden",
//         backgroundColor: "#fffbec",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "1rem",
//         boxSizing: "border-box"
//     },
//     cardWrapper: {
//         zIndex: 2,
//         transition: "opacity 1s ease"
//     },
//     card: {
//         maxWidth: 400,
//         width: "100%",
//         textAlign: "center",
//         backgroundColor: "#fffbe6",
//         boxShadow: "0 8px 24px rgba(0,0,0,0.15)"
//     }
// };

// export default SurpriseResult;




// import React, { useEffect, useState, useRef, useCallback } from "react";
// import { Card, Typography, Button } from "antd";
// import Confetti from "react-confetti";
// import { useWindowSize } from "react-use";

// const { Title, Paragraph } = Typography;

// const collageImages = Array.from({ length: 8 }, (_, i) =>
//     `${process.env.PUBLIC_URL}/images-webp/${i + 1}.webp`
// );

// const MAX_IMAGES = 6;

// const SurpriseResult = () => {
//     const [showCard, setShowCard] = useState(false);
//     const [loadedIndexes, setLoadedIndexes] = useState(new Set());
//     const [imageData, setImageData] = useState([]);
//     const { width, height } = useWindowSize();
//     const cardShown = useRef(false);

//     const generateImageData = useCallback(() => {
//         if (typeof window === "undefined") return;

//         const containerW = window.innerWidth - 32;
//         const containerH = window.innerHeight - 32;
//         const images = [...collageImages].sort(() => Math.random() - 0.5);
//         const placedRects = [];
//         const styles = [];

//         for (let src of images) {
//             if (styles.length >= MAX_IMAGES) break;

//             let attempt = 0;
//             const w = 40 + Math.random() * 60;
//             const h = w;

//             while (attempt < 50) {
//                 const top = Math.random() * (containerH - h);
//                 const left = Math.random() * (containerW - w);

//                 const newRect = { top, left, width: w, height: h };

//                 const overlaps = placedRects.some((r) => {
//                     return !(
//                         r.left + r.width + 10 < newRect.left ||
//                         r.left > newRect.left + newRect.width + 10 ||
//                         r.top + r.height + 10 < newRect.top ||
//                         r.top > newRect.top + newRect.height + 10
//                     );
//                 });

//                 if (!overlaps) {
//                     placedRects.push(newRect);
//                     styles.push({
//                         src,
//                         style: {
//                             top: `${(top / containerH) * 100}%`,
//                             left: `${(left / containerW) * 100}%`,
//                             width: `${w}px`,
//                             transform: `rotate(${Math.random() * 20 - 10}deg)`,
//                         },
//                     });
//                     break;
//                 }

//                 attempt++;
//             }
//         }

//         setImageData(styles);
//     }, []);

//     useEffect(() => {
//         generateImageData();
//     }, [generateImageData]);

//     useEffect(() => {
//         if (
//             imageData.length > 0 &&
//             loadedIndexes.size === imageData.length &&
//             !cardShown.current
//         ) {
//             cardShown.current = true;
//             setTimeout(() => setShowCard(true), 600);
//         }
//     }, [loadedIndexes, imageData]);

//     const handleImageLoad = useCallback(
//         (index) => {
//             setLoadedIndexes((prev) => new Set(prev).add(index));
//         },
//         [setLoadedIndexes]
//     );

//     return (
//         <div style={styles.container}>
//             <Confetti width={width} height={height} numberOfPieces={200} recycle gravity={0.1} />

//             {imageData.map((img, i) => (
//                 <img
//                     key={i}
//                     src={img.src}
//                     alt={`Surprise collage ${i + 1}`}
//                     loading="lazy"
//                     onLoad={() => handleImageLoad(i)}
//                     style={{
//                         ...img.style,
//                         position: "absolute",
//                         opacity: loadedIndexes.has(i) ? 0.45 : 0,
//                         transition: "opacity 1s ease",
//                         pointerEvents: "none",
//                         zIndex: 1,
//                     }}
//                 />
//             ))}

//             {showCard && (
//                 <div style={{ ...styles.cardWrapper, opacity: showCard ? 1 : 0 }}>
//                     <Card bordered={false} style={styles.card}>
//                         <Title level={1}>💍</Title>
//                         <Title level={2}>Benimle evlenir misin?</Title>
//                         <Button type="primary" size="large">
//                             Evet (bir zahmet)
//                         </Button>
//                         <Paragraph><br /></Paragraph>
//                         <Paragraph>*Hayır için bir seçenek sunmadım maalesef</Paragraph>
//                     </Card>
//                 </div>
//             )}
//         </div>
//     );
// };

// const styles = {
//     container: {
//         position: "relative",
//         height: "100vh",
//         width: "100%",
//         overflow: "hidden",
//         backgroundColor: "#fffbec",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "1rem",
//         boxSizing: "border-box",
//     },
//     cardWrapper: {
//         zIndex: 2,
//         transition: "opacity 1s ease",
//     },
//     card: {
//         maxWidth: 400,
//         width: "100%",
//         textAlign: "center",
//         backgroundColor: "#fffbe6",
//         boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
//     },
// };

// export default SurpriseResult;



import React, { useEffect, useState, useRef, useCallback } from "react";
import { Card, Typography, Button } from "antd";
// import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const { Title, Paragraph } = Typography;

const collageImages = Array.from({ length: 8 }, (_, i) =>
    `${process.env.PUBLIC_URL}/images-webp/${i + 1}.webp`
);

const MAX_IMAGES = 6;

const SurpriseResult = () => {
    const [showCard, setShowCard] = useState(false);
    const [loadedIndexes, setLoadedIndexes] = useState(new Set());
    const [imageData, setImageData] = useState([]);
    const { width = 360, height = 640 } = useWindowSize(); // safe defaults
    const cardShown = useRef(false);

    const generateImageData = useCallback(() => {
        if (typeof window === "undefined") return;

        const containerW = Math.max(window.innerWidth - 32, 320);
        const containerH = Math.max(window.innerHeight - 32, 500);
        const images = [...collageImages].sort(() => Math.random() - 0.5);
        const placedRects = [];
        const styles = [];

        for (let src of images) {
            if (styles.length >= MAX_IMAGES) break;

            let attempt = 0;
            const w = 40 + Math.random() * 40; // smaller on mobile
            const h = w;

            while (attempt < 50) {
                const top = Math.random() * (containerH - h);
                const left = Math.random() * (containerW - w);

                const newRect = { top, left, width: w, height: h };

                const overlaps = placedRects.some((r) => {
                    return !(
                        r.left + r.width + 8 < newRect.left ||
                        r.left > newRect.left + newRect.width + 8 ||
                        r.top + r.height + 8 < newRect.top ||
                        r.top > newRect.top + newRect.height + 8
                    );
                });

                if (!overlaps) {
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

    useEffect(() => {
        generateImageData();
    }, [generateImageData]);

    useEffect(() => {
        if (
            imageData.length > 0 &&
            loadedIndexes.size === imageData.length &&
            !cardShown.current
        ) {
            cardShown.current = true;
            setTimeout(() => setShowCard(true), 400); // faster feedback
        }
    }, [loadedIndexes, imageData]);

    const handleImageLoad = useCallback(
        (index) => {
            setLoadedIndexes((prev) => new Set(prev).add(index));
        },
        []
    );

    return (
        <div style={styles.container}>
            {/* Confetti disabled on very small screens */}
            {/* {width > 400 && height > 500 && (
                <Confetti
                    width={width}
                    height={height}
                    numberOfPieces={120}
                    recycle={false}
                    gravity={0.02}
                    run={true}
                />
            )} */}

            {imageData.map((img, i) => (
                <img
                    key={i}
                    src={img.src}
                    alt={`Surprise ${i + 1}`}
                    loading="lazy"
                    onLoad={() => handleImageLoad(i)}
                    style={{
                        ...img.style,
                        position: "absolute",
                        opacity: loadedIndexes.has(i) ? 0.45 : 0,
                        transition: "opacity 0.8s ease",
                        pointerEvents: "none",
                        zIndex: 1,
                        maxWidth: "25%", // prevents overflow
                    }}
                />
            ))}

            {showCard && (
                <div style={{ ...styles.cardWrapper, opacity: showCard ? 1 : 0 }}>
                    <Card bordered={false} style={styles.card}>
                        <Title level={1}>💍</Title>
                        <Title level={2}>Benimle evlenir misin?</Title>
                        <Button type="primary" size="large">
                            Evet (bir zahmet)
                        </Button>
                        <Paragraph><br /></Paragraph>
                        <Paragraph>*Hayır için bir seçenek sunmadım maalesef</Paragraph>
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
        padding: "1rem",
        boxSizing: "border-box",
        touchAction: "manipulation", // better mobile responsiveness
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
};

export default SurpriseResult;
