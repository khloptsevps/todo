import { Todo } from '@/types/Todo';

export const getAllTodos = async (): Promise<Todo[]> => {
  const res = await fetch(
    `http://${process.env.NEXT_PUBLIC_MOCK_API_TOKEN}.mockapi.io/api/v1/todos`,
    { cache: 'no-store' },
  );

  if (!res.ok) throw new Error('Failed to fetch todos');

  return res.json();
};
