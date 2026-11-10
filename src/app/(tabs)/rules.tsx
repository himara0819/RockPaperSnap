
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
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
};

export default function RulesScreen() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.header}>Game Rules 📜</Text>

      <View style={styles.card}>

        <View style={styles.rule}>
          <Text style={styles.emoji}>✊</Text>
          <View style={styles.ruleInfo}>
            <Text style={[styles.bold, { color: COLORS.rock }]}>
              Rock
            </Text>
            <Text style={styles.description}>
              Rock crushes Scissors
            </Text>
          </View>
        </View>

        <View style={styles.rule}>
          <Text style={styles.emoji}>✌️</Text>
          <View style={styles.ruleInfo}>
            <Text style={[styles.bold, { color: COLORS.scissors }]}>
              Scissors
            </Text>
            <Text style={styles.description}>
              Scissors cuts Paper
            </Text>
          </View>
        </View>

        <View style={styles.rule}>
          <Text style={styles.emoji}>✋</Text>
          <View style={styles.ruleInfo}>
            <Text style={[styles.bold, { color: COLORS.paper }]}>
              Paper
            </Text>
            <Text style={styles.description}>
              Paper covers Rock
            </Text>
          </View>
        </View>

      </View>

      <Text style={styles.descriptionText}>
        Select one of the three weapons from the main play arena.
        The computer will randomly select its weapon, and the
        winner is decided based on the classic rules above.
      </Text>

      <Text style={styles.footer}>
        First to conquer the arena wins! 🏆
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.background,
    padding: 25,
  },

  header: {
    fontSize: 32,
    fontWeight: '900',
    color: COLORS.text,
    marginBottom: 25,
  },

  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  rule: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 15,
  },

  emoji: {
    fontSize: 32,
  },

  ruleInfo: {
    flex: 1,
  },

  bold: {
    fontSize: 17,
    fontWeight: '900',
  },

  description: {
    fontSize: 14,
    color: COLORS.secondaryText,
    marginTop: 4,
  },

  descriptionText: {
    fontSize: 16,
    lineHeight: 26,
    color: COLORS.secondaryText,
    marginTop: 25,
  },

  footer: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.paper,
    marginTop: 20,
  },
});
