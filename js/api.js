export const submitSubscription = async (email) => {
  const response = await fetch(
    'https://your-energy.b.goit.study/api/subscription',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    }
  );

  if (!response.ok) {
    throw new Error('Failed to subscribe');
  }

  return response.json();
};
