// This line tells TypeScript that whenever you import a file with the .png extension,
//  it should be treated as a module.
declare module "*.png" {
  // This declares that the imported value from a .png file can be of any type
  const value: any;
  export default value;
}

declare module "*.jpg" {
  const value: any;
  export default value;
}

declare module "*.jpeg" {
  const value: any;
  export default value;
}

declare module "*.gif" {
  const value: any;
  export default value;
}

declare module "*.svg" {
  const value: any;
  export default value;
}
