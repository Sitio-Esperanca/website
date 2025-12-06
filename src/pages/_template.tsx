import styled from "@emotion/styled"

const Container = styled.main`
    width: 100%;
    max-width: 2500px;
    margin: 0 auto;
    position: relative;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0;
`

interface TemplateProps {
    children: React.ReactNode;
}

export default function Template({
    children
}: TemplateProps) {
    return <Container>
        {children}
    </Container>
}