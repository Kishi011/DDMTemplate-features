import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { PageTemplate } from '@/src/templates';
import React from 'react';
import { StyleSheet, Pressable, Linking } from 'react-native';

export const SobreScreen: React.FC = () => {

  const handleOpenLink = () => {
    Linking.openURL('https://www.youtube.com/watch?v=xvFZjo5PgG0&list=RDxvFZjo5PgG0&start_radio=1'); 
  };

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

        <Pressable style={styles.button} onPress={handleOpenLink}>
          <ThemedText style={styles.buttonText}>Para mais informações clique aqui</ThemedText>
        </Pressable>
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
  button: {
    marginTop: 20,
    backgroundColor: '#A020F0',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});