import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import Dado from './Dado';

type Turno = 'A' | 'B' | 'FIM';

export default function JogoDados() {
  const { width } = useWindowDimensions();
  const [rodada, setRodada] = useState(1);
  const [turno, setTurno] = useState<Turno>('A');

  const [dadoA1, setDadoA1] = useState(1);
  const [dadoA2, setDadoA2] = useState(1);
  const [dadoB1, setDadoB1] = useState(1);
  const [dadoB2, setDadoB2] = useState(1);

  const [resultadoA, setResultadoA] = useState('');
  const [resultadoB, setResultadoB] = useState('');
  const [vitoriasA, setVitoriasA] = useState(0);
  const [vitoriasB, setVitoriasB] = useState(0);

  // Calcula tamanho do dado dinamicamente para caber perfeitamente na tela
  const dadoSize = width < 360 ? 46 : width < 420 ? 54 : 62;

  const jogarA = () => {
    if (resultadoA !== '') {
      setResultadoA('');
      setResultadoB('');
      setRodada((prev) => prev + 1);
    }
    const v1 = Math.floor(Math.random() * 6) + 1;
    const v2 = Math.floor(Math.random() * 6) + 1;
    setDadoA1(v1);
    setDadoA2(v2);
    setTurno('B');
  };

  const jogarB = () => {
    const v1 = Math.floor(Math.random() * 6) + 1;
    const v2 = Math.floor(Math.random() * 6) + 1;
    setDadoB1(v1);
    setDadoB2(v2);

    const somaA = dadoA1 + dadoA2;
    const somaB = v1 + v2;

    if (somaA > somaB) {
      setResultadoA('Ganhou');
      setResultadoB('Perdeu');
      setVitoriasA((prev) => prev + 1);
    } else if (somaB > somaA) {
      setResultadoA('Perdeu');
      setResultadoB('Ganhou');
      setVitoriasB((prev) => prev + 1);
    } else {
      setResultadoA('Empatou');
      setResultadoB('Empatou');
    }

    if (rodada === 5) {
      setTurno('FIM');
    } else {
      setTurno('A');
    }
  };

  const reiniciar = () => {
    setRodada(1);
    setTurno('A');
    setVitoriasA(0);
    setVitoriasB(0);
    setResultadoA('');
    setResultadoB('');
    setDadoA1(1);
    setDadoA2(1);
    setDadoB1(1);
    setDadoB2(1);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.containerJogo}>
        <View style={styles.caixaPrincipal}>
          {/* Título da Rodada */}
          <View style={styles.badgeRodada}>
            <Text style={styles.tituloRodada}>
              {turno === 'FIM' ? 'Fim de Jogo' : `Rodada ${rodada}`}
            </Text>
          </View>

          {/* Área dos Jogadores */}
          <View style={styles.areaJogadores}>
            {/* Jogador A */}
            <View
              style={[
                styles.blocoJogador,
                turno === 'A' && styles.blocoAtivo,
              ]}
            >
              <Text style={styles.nomeJogador}>Jogador A</Text>
              <View style={styles.dadosLinha}>
                <Dado valor={dadoA1} size={dadoSize} />
                <Dado valor={dadoA2} size={dadoSize} />
              </View>

              {turno !== 'FIM' && (
                <Text
                  style={[
                    styles.textoResultado,
                    resultadoA === 'Ganhou' && styles.textoVitoria,
                    resultadoA === 'Perdeu' && styles.textoDerrota,
                  ]}
                >
                  {resultadoA}
                </Text>
              )}

              <TouchableOpacity
                onPress={jogarA}
                disabled={turno !== 'A'}
                activeOpacity={0.7}
                style={[
                  styles.botaoJogar,
                  turno !== 'A' && styles.botaoDesabilitado,
                ]}
              >
                <Text style={styles.textoBotaoJogar}>Jogar Dado</Text>
              </TouchableOpacity>
            </View>

            {/* Jogador B */}
            <View
              style={[
                styles.blocoJogador,
                turno === 'B' && styles.blocoAtivo,
              ]}
            >
              <Text style={styles.nomeJogador}>Jogador B</Text>
              <View style={styles.dadosLinha}>
                <Dado valor={dadoB1} size={dadoSize} />
                <Dado valor={dadoB2} size={dadoSize} />
              </View>

              {turno !== 'FIM' && (
                <Text
                  style={[
                    styles.textoResultado,
                    resultadoB === 'Ganhou' && styles.textoVitoria,
                    resultadoB === 'Perdeu' && styles.textoDerrota,
                  ]}
                >
                  {resultadoB}
                </Text>
              )}

              <TouchableOpacity
                onPress={jogarB}
                disabled={turno !== 'B'}
                activeOpacity={0.7}
                style={[
                  styles.botaoJogar,
                  turno !== 'B' && styles.botaoDesabilitado,
                ]}
              >
                <Text style={styles.textoBotaoJogar}>Jogar Dado</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Placar Final */}
          {turno === 'FIM' && (
            <View style={styles.placarFinal}>
              <Text style={styles.fraseVencedor}>
                {vitoriasA > vitoriasB && 'O Jogador A venceu a partida!'}
                {vitoriasB > vitoriasA && 'O Jogador B venceu a partida!'}
                {vitoriasA === vitoriasB && 'A partida terminou em empate!'}
              </Text>

              <Text style={styles.textoPlacar}>
                Placar Final: {vitoriasA} x {vitoriasB}
              </Text>

              <TouchableOpacity
                onPress={reiniciar}
                activeOpacity={0.7}
                style={styles.botaoReiniciar}
              >
                <Text style={styles.textoBotaoReiniciar}>Jogar Novamente</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 12,
  },
  containerJogo: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: 'rgba(255, 255, 255, 0.45)',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.7)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 4,
    overflow: 'hidden',
  },
  caixaPrincipal: {
    padding: 18,
    alignItems: 'center',
  },
  badgeRodada: {
    backgroundColor: 'rgba(230, 173, 98, 0.4)',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 28,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  tituloRodada: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
    textAlign: 'center',
  },
  areaJogadores: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 10,
    marginBottom: 10,
  },
  blocoJogador: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: '#ffffff',
    borderRadius: 15,
    padding: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  blocoAtivo: {
    borderColor: '#e6ad62',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
  },
  nomeJogador: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  dadosLinha: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoResultado: {
    fontWeight: 'bold',
    fontSize: 13,
    minHeight: 20,
    textAlign: 'center',
    marginBottom: 12,
    color: '#444444',
  },
  textoVitoria: {
    color: '#15803d',
  },
  textoDerrota: {
    color: '#b91c1c',
  },
  botaoJogar: {
    borderWidth: 2,
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    width: '100%',
    maxWidth: 130,
  },
  botaoDesabilitado: {
    opacity: 0.35,
    elevation: 0,
    shadowOpacity: 0,
  },
  textoBotaoJogar: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#1a1a1a',
  },
  placarFinal: {
    borderTopWidth: 2,
    borderTopColor: '#cccccc',
    marginTop: 16,
    paddingTop: 16,
    width: '100%',
    alignItems: 'center',
  },
  fraseVencedor: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
    textAlign: 'center',
  },
  textoPlacar: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
  },
  botaoReiniciar: {
    borderWidth: 2,
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  textoBotaoReiniciar: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#1a1a1a',
  },
});

