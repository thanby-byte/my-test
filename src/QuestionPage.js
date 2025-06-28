import { Button, Progress, Typography, Space } from "antd";

const { Title, Paragraph } = Typography;

function QuestionPage({ questionData, onAnswer, currentIndex, total }) {
    const progressValue = ((currentIndex + 1) / total) * 100;

    return (
        <div style={{ padding: "2rem", fontFamily: "Arial", maxWidth: 600, margin: "0 auto" }}>
            <Progress percent={progressValue} showInfo={false} style={{ marginBottom: "1rem" }} />
            <Title level={3}>Question {currentIndex + 1} of {total}</Title>
            <Paragraph>{questionData.question}</Paragraph>
            <Space direction="vertical" style={{ width: "100%" }}>
                {questionData.options.map((option, idx) => (
                    <Button
                        key={idx}
                        type="primary"
                        block
                        onClick={() => onAnswer(option)}
                        style={{ marginTop: 8 }}
                    >
                        {option}
                    </Button>
                ))}
            </Space>
        </div>
    );
}

export default QuestionPage;
