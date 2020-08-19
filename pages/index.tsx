import { NextSeo } from "next-seo";
import { Container } from "../components/container";
import { Main } from "../components/main";
import { TitleHeaderOne } from "../components/title-header-one";
import { TitleAnchor } from "../components/title-anchor";
import { Description } from "../components/description";
import { Code } from "../components/code";
import { Grid } from "../components/grid";
import { Card } from "../components/card";
import { CardParagraph } from "../components/card-paragraph";
import { CardHeaderThree } from "../components/card-header-three";
import { GridImage } from "../components/grid-image";
import { Footer } from "../components/footer";
import { FooterAnchor } from "../components/footer-anchor";
import { FooterImage } from "../components/footer-image";

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

export async function getServerSideProps() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=${process.env.YOUTUBE_PLAYLIST_ID}&key=${process.env.YOUTUBE_API_KEY}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    <>
      <NextSeo
        title="Using More of Config"
        description="This example uses more of the available config options."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://www.url.ie/a",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url: "https://www.example.ie/og-image-02.jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
            },
            { url: "https://www.example.ie/og-image-03.jpg" },
            { url: "https://www.example.ie/og-image-04.jpg" },
          ],
          site_name: "SiteName",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Container>
        <Main>
          <TitleHeaderOne>Welcome to a Random YouTube Playlist</TitleHeaderOne>

          <Grid>
            {data.items.map(({ id, snippet = {} }) => {
              const { title, thumbnails = {}, resourceId = {} } = snippet;
              const { medium } = thumbnails;

              return (
                <Card key={id}>
                  <TitleAnchor
                    href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                  >
                    <CardParagraph>
                      <GridImage
                        width={medium.width}
                        height={medium.height}
                        src={medium.url}
                        alt=""
                      />
                    </CardParagraph>
                    <CardHeaderThree>{title}</CardHeaderThree>
                  </TitleAnchor>
                </Card>
              );
            })}
          </Grid>
        </Main>
        <Footer>
          <p>Powered by Eddie</p>
          <p> & </p>

          <FooterImage src="/zeit.svg" alt="ZEIT Logo" />

          <FooterAnchor
            href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          ></FooterAnchor>
        </Footer>
      </Container>
    </>
  );
}
