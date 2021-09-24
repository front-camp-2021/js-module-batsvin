export const weirdString = (str = "") => {
   let text = str
   const result = text.toUpperCase().split(" ").map(word => {
      const len = word.length;
      if (len > 1) {
         word = word.substring(0, len - 1) + word[len - 1].toLowerCase();
      }
      return word;
   }).join(" ");
   return result
};
