function domainType(domains: string[]): string[] {
  let result = [],
    items,
    type;

  for (const i of domains) {
    items = i.split(".");
    type = items[items.length - 1];
    console.log(type);

    if (type === "org") {
      result.push("organization");
    } else if (type === "com") {
      result.push("commercial");
    } else if (type === "net") {
      result.push("network");
    } else if (type === "info") {
      result.push("information");
    }
  }

  return result;
}

console.log(
  domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"])
);
