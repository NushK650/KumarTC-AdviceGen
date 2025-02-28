
export const getAdvice = async () => {
    try {
      
      const response = await fetch('https://api.adviceslip.com/advice');
      
     
      if (!response.ok) {
        throw new Error('Failed to fetch advice');
      }
  
      const data = await response.json();
      return data; 
    } catch (error) {
      console.error('Error fetching advice:', error);
      throw error; 
    }
  };
  