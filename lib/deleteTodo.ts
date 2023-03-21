export const deleteTodo = async (id: string) => {
  await fetch(
    `http://${process.env.NEXT_PUBLIC_MOCK_API_TOKEN}.mockapi.io/api/v1/todos/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};
