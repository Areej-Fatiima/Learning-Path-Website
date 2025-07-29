// import axios from 'axios';

// const API_KEY = 'lqNygWjEPLc9ZRlE40X0jCREIA1oWxJtghHrjqJG';

// export async function generateRoadmap(goal) {
//   const prompt = `Give me a 4-step learning roadmap to achieve this goal: "${goal}". Keep each step clear and concise.`;

//   const response = await axios.post(
//     'https://api.cohere.ai/v1/generate',
//     {
//       model: 'command',
//       prompt: prompt,
//       max_tokens: 300,
//       temperature: 0.7,
//     },
//     {
//       headers: {
//         Authorization: `Bearer ${API_KEY}`,
//         'Content-Type': 'application/json',
//       },
//     }
//   );

//   return response.data.generations[0].text.trim();
// }


import axios from 'axios';

const API_KEY = 'lqNygWjEPLc9ZRlE40X0jCREIA1oWxJtghHrjqJG';

export async function generateRoadmap(goal) {
  const prompt = `Give me a 4-step learning roadmap to achieve this goal: "${goal}". Keep each step clear and concise.`;

  const response = await axios.post(
    'https://api.cohere.ai/v1/generate',
    {
      model: 'command',
      prompt: prompt,
      max_tokens: 300,
      temperature: 0.7,
    },
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data.generations[0].text.trim();
}
