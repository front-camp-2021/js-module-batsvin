export const splitAndMerge = (str = "", separator = "") => {
   let text = str
   const result = text.split(" ").map(word => {
      const len = word.length;
      let add = ""
      if (len >= 1) {
         add = word.split("").map(letter => {
            letter += separator;
            return letter
         }
         ).join("")
         add = add.slice(0, -1);
      }
      return add;
   }).join(" ");
   return result
};
