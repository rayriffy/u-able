export const getShadow = (shade?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl') => {
  switch (shade) {
    case 'xs':
      return {
        boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      }
    case 'sm':
      return {
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      }
    case 'md':
      return {
        boxShadow:
          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }
    case 'lg':
      return {
        boxShadow:
          '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    case 'xl':
      return {
        boxShadow:
          '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }
    case '2xl':
      return {
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      }
    default:
      return {
        boxShadow:
          '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      }
  }
}
