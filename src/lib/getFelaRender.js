import { createRenderer } from "fela";
import webPreset from "fela-preset-web";
import embedded from "fela-plugin-embedded";
import placeholderPrefixer from "fela-plugin-placeholder-prefixer";
import important from "fela-plugin-important";

export default function getRenderer() {
  return createRenderer({
    plugins: [...webPreset, embedded(), placeholderPrefixer(), important()]
  });
}
