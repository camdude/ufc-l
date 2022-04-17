import client from "./sanity";
import imageUrlBuilder from "@sanity/image-url";

export function urlFor(source) {
  const builder = imageUrlBuilder(client);

  return builder.image(source);
}

export function urlForAsset(ref) {
  const [_file, id, extension] = ref.split("-");
  return `https://cdn.sanity.io/files/${process.env.SANITY_PROJECT_ID}/${process.env.SANITY_DATASET_NAME}/${id}.${extension}`;
}

export async function getAllPages() {
  const results = await client.fetch(`*[_type == "page"]`);

  return results;
}

export async function getNavigation() {
  const results = await client.fetch(
    `*[_type == 'navigation'][0] {
        ...,
        sections[]{
          ...,
          target->{title, slug, _id},
          links[]{
            ...,
            target->{title, slug, _id},
            children[]{
              ...,
              target->{title, slug, _id}
            }
          }
        }
      }`
  );

  return results;
}

const pageFields = `
    title,
    coverImage,
    'slug': slug.current,
`;

export async function getPagebySlug(slug) {
  const result = await client.fetch(
    `*[_type == "page" && slug.current == $slug] {
        ${pageFields}
        content[]{..., "asset": asset->}
      }`,
    { slug }
  );

  return result;
}