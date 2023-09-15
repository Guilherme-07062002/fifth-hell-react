import { Container, Typography } from "@mui/material"

const Home = () => {
    return (
        <Container
            component="main"
            maxWidth={false}
            sx={{
                padding: { xs: 1, sm: 3 },
                marginY: 1,
                maxWidth: { xl: "90%" },
            }}
        >
            <Typography>Olá Mundo</Typography>
        </Container>
    )
}

export default Home;