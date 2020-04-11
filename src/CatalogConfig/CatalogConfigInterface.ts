export interface CatalogConfigInterface {
  Create(
    userId: string,
    xmlUrl: string,
    updateFrequency: number
  ): object

  Rules() : object
}
