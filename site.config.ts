export const config = {
  siteMeta: {
    title: "LAPRAS Team Blog Hub",
    teamName: "LAPRAS inc.",
    description: "LAPRAS株式会社メンバーの記事投稿まとめ",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://team-blog-hub.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Company",
      href: "https://corp.lapras.com/",
    },
  ],
};
