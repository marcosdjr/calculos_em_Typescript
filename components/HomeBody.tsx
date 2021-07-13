import { useState } from 'react';
import styles from '../styles/homebody.module.scss';
import { Typography, Grid, TextField, Button, Card, CardContent } from '@material-ui/core';
import Link from 'next/link';

export default function HomeBody() {


    return (
        <div className={styles.calculator_area}>
            <div className={styles.body}>
                <Link href="/calculadora" >
                    <Card className={styles.card} variant="outlined">
                        <div >
                            <p>Calculadora de operações matemáticas</p>
                            <Grid item className={styles.textfield}>
                                <img className={styles.image} src="/images/math.png" alt="Imagem dos operadores matemáticos básicos (adição, subtração, multiplicação, divisão e igualdade)." />
                            </Grid>
                        </div>
                    </Card>
                </Link>

                <Link href="/imc" >
                    <Card className={styles.card} variant="outlined">
                        <div >
                            <p>Calculadora de IMC</p>
                            <Grid item className={styles.textfield}>
                                <img className={styles.image} src="/images/medic.png" alt="Imagem de um médico avaliando un paciente." />
                            </Grid>
                        </div>
                    </Card>
                </Link>

                <Link href="/temperature" >
                    <Card className={styles.card} variant="outlined">
                        <div >
                            <p>Conversor de unidades de temperatura</p>
                            <Grid item className={styles.textfield}>
                                <img className={styles.image} src="/images/termometroazul.png" alt="Imagem de um médico avaliando un paciente." />
                            </Grid>
                        </div>
                    </Card>
                </Link>


            </div>



        </div >
    )
}