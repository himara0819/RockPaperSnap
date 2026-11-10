import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const COLORS = {
  background: '#FFFFFF',
  surface: '#F8FAFC',
  text: '#1E293B',
  secondaryText: '#64748B',
  border: '#E2E8F0',
  rock: '#EF4444',
  paper: '#0D9488',
  scissors: '#D97706',
  win: '#0D9488',
  draw: '#D97706',
  loss: '#EF4444',
};

const CHOICES = [
  { name: 'Rock', emoji: '✊', color: COLORS.rock },
  { name: 'Paper', emoji: '✋', color: COLORS.paper },
  { name: 'Scissors', emoji: '✌️', color: COLORS.scissors },
];

type Choice = typeof CHOICES[number];

export default function PlayScreen() {
  const [userChoice, setUserChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState('Make your move!');
  const [resultColor, setResultColor] = useState(COLORS.text);

  const [score, setScore] = useState({
    wins: 0,
    draws: 0,
    losses: 0,
  });

  const playGame = (choice: Choice) => {
    const compChoice = CHOICES[
      Math.floor(Math.random() * 3)
    ];

    setUserChoice(choice);
    setComputerChoice(compChoice);

    if (choice.name === compChoice.name) {
      setResult("It's a Draw! 🤝");
      setResultColor(COLORS.draw);
      setScore(prev => ({
        ...prev,
        draws: prev.draws + 1,
      }));
    } else if (
      (choice.name === 'Rock' && compChoice.name === 'Scissors') ||
      (choice.name === 'Paper' && compChoice.name === 'Rock') ||
      (choice.name === 'Scissors' && compChoice.name === 'Paper')
    ) {
      setResult('You Win! 🎉');
      setResultColor(COLORS.win);
      setScore(prev => ({
        ...prev,
        wins: prev.wins + 1,
      }));
    } else {
      setResult('Computer Wins! 🤖');
      setResultColor(COLORS.loss);
      setScore(prev => ({
        ...prev,
        losses: prev.losses + 1,
      }));
    }
  };

  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult('Make your move!');
    setResultColor(COLORS.text);
    setScore({ wins: 0, draws: 0, losses: 0 });
  };

  return (
    <View style={styles.container}>

      <Text style={styles.header}>RPS Showdown</Text>
      <Text style={styles.subtitle}>
        Rock · Paper · Scissors
      </Text>

      {/* SCOREBOARD */}
      <View style={styles.scoreboard}>
        <View style={styles.scoreColumn}>
          <Text style={styles.scoreLabel}>WINS</Text>
          <Text style={[styles.scoreValue, { color: COLORS.win }]}>
            {score.wins}
          </Text>
        </View>

        <View style={styles.scoreColumn}>
          <Text style={styles.scoreLabel}>DRAWS</Text>
          <Text style={[styles.scoreValue, { color: COLORS.draw }]}>
            {score.draws}
          </Text>
        </View>

        <View style={styles.scoreColumn}>
          <Text style={styles.scoreLabel}>LOSSES</Text>
          <Text style={[styles.scoreValue, { color: COLORS.loss }]}>
            {score.losses}
          </Text>
        </View>
      </View>

      {/* GAME ARENA */}
      <View style={styles.arena}>
        <View style={styles.playerSection}>
          <Text style={styles.playerTitle}>YOU</Text>

          <View style={styles.emojiCircle}>
            <Text style={styles.emojiText}>
              {userChoice ? userChoice.emoji : '❓'}
            </Text>
          </View>
        </View>

        <Text style={styles.vs}>VS</Text>

        <View style={styles.playerSection}>
          <Text style={styles.playerTitle}>COMPUTER</Text>

          <View style={styles.emojiCircle}>
            <Text style={styles.emojiText}>
              {computerChoice ? computerChoice.emoji : '❓'}
            </Text>
          </View>
        </View>
      </View>

      {/* RESULT */}
      <View style={[
        styles.resultContainer,
        { borderColor: resultColor }
      ]}>
        <Text style={[styles.resultText, { color: resultColor }]}>
          {result}
        </Text>
      </View>

      <Text style={styles.instruction}>
        Choose Your Weapon
      </Text>

      {/* CHOICE BUTTONS */}
      <View style={styles.buttonContainer}>
        {CHOICES.map(choice => (
          <TouchableOpacity
            key={choice.name}
            style={[
              styles.button,
              { borderColor: choice.color }
            ]}
            onPress={() => playGame(choice)}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonEmoji}>
              {choice.emoji}
            </Text>

            <Text style={styles.buttonText}>
              {choice.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* RESET BUTTON */}
      <TouchableOpacity
        style={styles.resetButton}
        onPress={resetGame}
      >
        <Text style={styles.resetText}>
          ↻ Reset Game
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    paddingTop: 55,
    paddingHorizontal: 16,
  },

  header: {
    fontSize: 32,
    fontWeight: '900',
    color: COLORS.text,
    letterSpacing: 0.5,
  },

  subtitle: {
    fontSize: 14,
    color: COLORS.secondaryText,
    marginTop: 5,
    marginBottom: 25,
  },

  scoreboard: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: COLORS.surface,
    padding: 20,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 20,
    justifyContent: 'space-around',
  },

  scoreColumn: {
    alignItems: 'center',
    flex: 1,
  },

  scoreLabel: {
    fontSize: 12,
    color: COLORS.secondaryText,
    fontWeight: '700',
  },

  scoreValue: {
    fontSize: 26,
    fontWeight: '900',
    marginTop: 5,
  },

  arena: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: COLORS.surface,
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  playerSection: {
    flex: 1,
    alignItems: 'center',
  },

  playerTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: COLORS.text,
    marginBottom: 12,
  },

  emojiCircle: {
    width: 78,
    height: 78,
    borderRadius: 39,
    borderWidth: 2,
    borderColor: COLORS.border,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
  },

  emojiText: {
    fontSize: 36,
  },

  vs: {
    fontSize: 15,
    fontWeight: '900',
    color: COLORS.secondaryText,
  },

  resultContainer: {
    width: '100%',
    padding: 16,
    borderRadius: 15,
    borderWidth: 1.5,
    marginTop: 18,
    alignItems: 'center',
  },

  resultText: {
    fontSize: 22,
    fontWeight: '900',
  },

  instruction: {
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.text,
    marginVertical: 15,
  },

  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    gap: 10,
  },

  button: {
    flex: 1,
    backgroundColor: COLORS.surface,
    borderWidth: 1.5,
    borderRadius: 16,
    alignItems: 'center',
    paddingVertical: 15,
  },

  buttonEmoji: {
    fontSize: 30,
    marginBottom: 8,
  },

  buttonText: {
    fontSize: 13,
    fontWeight: '800',
    color: COLORS.text,
  },

  resetButton: {
    marginTop: 20,
    padding: 12,
  },

  resetText: {
    color: COLORS.secondaryText,
    fontSize: 14,
    fontWeight: '700',
  },
});
