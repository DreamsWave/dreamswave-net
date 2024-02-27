import { Helmet } from "react-helmet-async";
import { useAppSelector } from "../hooks";
import { selectLanguage } from "../features/language/languageSlice";

function Head() {
  const { languageType } = useAppSelector(selectLanguage);

  return (
    <Helmet>
      <html lang={languageType} />
      <meta name="title" content="DreamsWave Socials" />
      <meta
        name="description"
        content="DreamsWave - Web developer, Pixel art hobbyist, Music enjoyer, Gamer"
      />
      <meta
        name="keywords"
        content="web developer, pixel art, socials, social media, contacts"
      />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        name="language"
        content={languageType === "en" ? "English" : "Russian"}
      />
      <meta name="author" content="DreamsWave" />
      <title>DreamsWave</title>
    </Helmet>
  );
}

export default Head;
