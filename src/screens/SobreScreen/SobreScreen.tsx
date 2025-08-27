import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { PageTemplate } from '@/src/templates';
import React from 'react';
import { StyleSheet } from 'react-native';

export const SobreScreen: React.FC = () => {
  

  return (
    <PageTemplate
      title="Sobre"
      scrollable
      keyboardAvoiding
    >
      <ThemedView style={styles.header}>
        
        <ThemedText style={styles.subtitle}>
          Esta é uma aplicação da disciplina de desenvolvimento mobile criada em sala de aula para controle de
          tarefas gerais.
        </ThemedText>
      </ThemedView>
    </PageTemplate>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 8,
  },
});
