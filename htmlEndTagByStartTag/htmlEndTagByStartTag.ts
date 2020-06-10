function htmlEndTagByStartTag(startTag: string): string {
  let tagArray = startTag.split(" ");
  let tagArray2 = tagArray[0].toString().split("");

  let endTag = "</";

  console.log(tagArray2);

  for (let i = 1; i < tagArray2.length; i++) {
    console.log(endTag);

    endTag += tagArray2[i];
  }

  return endTag[endTag.length - 1] === ">" ? endTag : (endTag += ">");
}
//console.log(htmlEndTagByStartTag("<img src>"));
console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
//console.log(htmlEndTagByStartTag("<i>"));
