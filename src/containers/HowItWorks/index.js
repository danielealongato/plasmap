import { Box, Grid } from "@mui/material";
import React from "react";

export default function HowItWorks() {
  return (
    <>
      <div className="body" style={{ paddingLeft: 20, paddingBottom: 20 }}>
        <h1>Como Funciona?</h1>
        <Grid container spacing={6}>
          <Grid item xs={8}>
            O processo para você pedir ou doar sangue é muito simples, basta se
            registrar ou fazer login na plataforma. Depois você terá acesso a
            area exclusiva que pode solicitar ou achar Hemocentros e pessoas que
            precisam de doação por todo país. <br /> Caso existam pessoas
            precisando de doações você poderá visualizar uma lista ordenada pela
            proximidade (caso tenha sido concedido acesso a localização). <br />{" "}
            Porém se não houverem solicitações, você poderá conferir os
            endereços dos hemocentros espalhados por todo território nacional e
            ir doar. <br />
            Registrando suas doações a plataforma ainda pode te oferecer
            histórico de doações e a previsão da próxima data hábil a você doar.
          </Grid>
          <Grid item xs={4}>
            <img
              src={require("../../assets/img/como-funciona-1.png")}
              alt="Plasmap"
              width="75%"
            />
          </Grid>
        </Grid>
        <hr />
        <h1 style={{ textAlign: "center" }}>Requisitos Básicos</h1>
        <Grid container spacing={6}>
          <Grid item xs={10}>
            - Estar em boas condições de saúde. Ter entre 16 e 69 anos, desde
            que a primeira doação tenha sido feita até 60 anos (menores de 18
            anos, clique para ver documentos necessários e formulário de
            autorização). <br />
            - Pesar no mínimo 50kg. <br />
            - Estar descansado (ter dormido pelo menos 6 horas nas últimas 24
            horas). <br />
            - Estar alimentado (evitar alimentação gordurosa nas 4 horas que
            antecedem a doação). <br />
            - Apresentar documento original com foto recente, que permita a
            identificação do candidato, emitido por órgão oficial (Carteira de
            Identidade ou cópia autenticada; Cartão de Identidade de
            Profissional Liberal; Carteira de Trabalho e Previdência Social;
            Carteira Nacional de Habilitação, digital ou física; RNE - Registro
            Nacional de Estrangeiro; Título de Eleitor Digital, desde que tenha
            a foto; e Passaporte brasileiro com filiação). <br />
          </Grid>
        </Grid>
        <hr />
        <Grid container spacing={6}>
          <Grid item xs={4}>
            <img
              src={require("../../assets/img/como-funciona-2.png")}
              alt="Plasmap"
              width="75%"
            />
          </Grid>
          <Grid item xs={8}>
            <h1>Quais são os impedimentos temporários para doar sangue?</h1>
            - Gripe, resfriado e febre: aguardar 7 dias após o desaparecimento
            dos sintomas;
            <br />
            - Período gestacional;
            <br />
            - Período pós-gravidez: 90 dias para parto normal e 180 dias para
            cesariana;
            <br />
            - Amamentação: até 12 meses após o parto;
            <br />
            - Ingestão de bebida alcoólica nas 12 horas que antecedem a doação;
            <br />
          </Grid>
          <Grid item xs={12}>
            - Tatuagem e/ou piercing nos últimos 12 meses (piercing em cavidade
            oral ou região genital impedem a doação);
            <br />
            - Extração dentária: 72 horas; <br />
            - Apendicite, hérnia, amigdalectomia, varizes: 3 meses; <br />
            - Colecistectomia, histerectomia, nefrectomia, redução de fraturas,
            politraumatismos sem seqüelas graves, tireoidectomia, colectomia: 6
            meses; <br />
            - Transfusão de sangue: 1 ano; <br />
            - Vacinação: o tempo de impedimento varia de acordo com o tipo de
            vacina; <br />
            - Exames/procedimentos com utilização de endoscópio nos últimos 6
            meses; <br />- Ter sido exposto a situações de risco acrescido para
            infecções sexualmente transmissíveis (aguardar 12 meses após a
            exposição). <br />
          </Grid>
        </Grid>
        <hr />
        <h1>Quais são os impedimentos definitivos para doar sangue?</h1>
        <Grid container spacing={6}>
          <Grid item xs={8}>
            - Hepatite após os 11 anos de idade. Evidência clínica ou
            laboratorial das seguintes doenças infecciosas transmissíveis pelo
            sangue: Hepatites B e C, AIDS (vírus HIV), doenças associadas aos
            vírus HTLV I e II e Doença de Chagas. <br />
            Uso de drogas ilícitas injetáveis.
            <br />
            - Malária. <br />
            - Mal de Parkinson. <br />
            * Hepatite após o 11º aniversário: Recusa Definitiva. Hepatite B ou
            C após ou antes dos 10 anos: Recusa definitiva. Hepatite por
            Medicamento: apto após a cura e avaliado clinicamente. Hepatite
            viral (A): após os 11 anos de idade, se trouxer o exame do
            diagnóstico da doença, será avaliado pelo médico da triagem.
            <br />
          </Grid>
          <Grid item xs={4}>
            <img
              src={require("../../assets/img/como-funciona-3.png")}
              alt="Plasmap"
              width="75%"
            />
          </Grid>
        </Grid>
        <hr />
        <Grid container spacing={6}>
          <Grid item xs={6}>
            <h1>Qual o intervalo entre doações de sangue?</h1>
            Homens: de 2 em 2 meses, sendo, no máximo, 4 vezes ao ano <br />
            Mulheres: 3 em 3 meses, sendo, no máximo, 3 doações anuais.
            <br />
          </Grid>
          <Grid item xs={6}>
            <h1>Qual a quantidade de sangue doado?</h1>
            Uma pessoa adulta tem, em média, 5 litros de sangue. Em cada doação,
            o máximo de sangue retirado é de 450 ml.
            <br />
          </Grid>
        </Grid>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <Grid container spacing={6} justify="center">
            <Grid item xs={12} justify="center">
              <img
                src={require("../../assets/img/tipos-sanguineos.png")}
                alt="Plasmap"
                width="75%"
              />
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
