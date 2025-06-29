import { Button, Progress, Typography, Space } from "antd";

const { Title, Paragraph } = Typography;

function QuestionPage({ questionData, onAnswer, currentIndex, total }) {
    const progressValue = ((currentIndex + 1) / total) * 100;

    return (
        <div style={{ padding: "2rem", fontFamily: "Arial", maxWidth: 600, margin: "0 auto" }}>
            <Progress percent={progressValue} showInfo={true} style={{ marginBottom: "1rem" }} />
            <Title level={3}>Question {currentIndex + 1} of {total}</Title>
            <Paragraph>{questionData.question}</Paragraph>
            <Paragraph><br /></Paragraph>
            <Paragraph><br /></Paragraph>
            <Paragraph><br /></Paragraph>
            <Space direction="vertical" style={{ width: "100%" }}>
                {questionData.options.map((option, idx) => (
                    <Button
                        key={idx}
                        type="primary"
                        block
                        onClick={() => onAnswer(option)}
                        style={{ marginTop: 14 }}
                    >
                        {option}
                    </Button>
                ))}
            </Space>
        </div>
    );
}

export default QuestionPage;
