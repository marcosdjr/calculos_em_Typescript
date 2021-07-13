import styles from "../styles/homeheader.module.scss";
import { Container, Grid, Typography } from '@material-ui/core';
import Link from 'next/link';



export default function HomeHeader() {
    return (
        <div className={styles.header}>
            {/*fixed faz ele fixar grudado no topo, como uma barra de tarefas */}
            <Container fixed>
                {/*justify, etc, vieram do material-ui */}
                <Grid  container justifyContent="center" alignItems="center" spacing={5}>
                    {/*item é algo fixo, de acordo com conceitos da responsividade*/}
                    <Grid item xs={12} sm={6}>
                        <Typography variant='h3' className={styles.header_title}>Descomplique com um clique!</Typography>
                        <Typography>Escolha a calculadora desejada, clique na imagem e facilite sua vida.

                        </Typography>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center" item xs={12} sm={6} >
                        <img src="/images/brain.png" alt="Imagem de um cérebro com desenhos que remetem à razão e emoções." />
                    </Grid>
                </Grid>
            </Container>

         </div>
    )

}