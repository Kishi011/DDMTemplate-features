import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useTaskContext } from '@/src/hooks';
import { TaskForm } from '@/src/organisms';
import { PageTemplate } from '@/src/templates';
import { CreateTaskData } from '@/src/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

export const AddTaskScreen: React.FC = () => {
  const { createTask, tasks } = useTaskContext();

  const handleFormSubmit = async (taskData: CreateTaskData) => {
    await createTask(taskData);
  };

  const handleFormSuccess = async () => {
    try {
      
      await AsyncStorage.removeItem('@tasksNotificationShown');

      
      setTimeout(async () => {
        const abertas = tasks.filter(t => !t.completed).map(t => t.title);

        if (abertas.length > 0) {
          await Notifications.scheduleNotificationAsync({
            content: {
              title: '📝 Tasks em aberto',
              body: abertas.join('\n'),
            },
            trigger: null,
          });
        }

        router.push('/(tabs)');
      }, 100);
    } catch (error) {
      console.error('Erro ao enviar notificação de tasks:', error);
      router.push('/(tabs)');
    }
  };

  return (
    <PageTemplate title="" scrollable keyboardAvoiding>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Nova Tarefa</ThemedText>
        <ThemedText style={styles.subtitle}>
          Preencha os detalhes da sua nova tarefa
        </ThemedText>
      </ThemedView>

      <TaskForm onSubmit={handleFormSubmit} onSuccess={handleFormSuccess} />
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
