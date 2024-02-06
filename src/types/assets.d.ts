declare module '$assets/*' {
  import type { ImageRequireSource } from 'react-native';

  /**
   * Assets imported from `$assets` will be imported as
   * a number that can be passed to `<Image source={...} />`.
   *
   * @see https://reactnative.dev/docs/image#imagesource
   */
  const asset: ImageRequireSource;
  export default asset;
}
