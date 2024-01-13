class TextFormattingUtil {
    static formatNumber(num: number): string {
      const formattedNumber = num.toString().padStart(3, '0');
      return `#${formattedNumber}`;
    }
  
    static capitalizeText(text: string): string {
      if (!text) {
        return '';
      }
      return text.charAt(0).toUpperCase() + text.slice(1);
    }
  }
  
  export default TextFormattingUtil;
  