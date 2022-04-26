const {Shop, Item} = require("../src/gilded_rose");


beforeEach(() => {
  this.brie = new Item("Aged Brie", 2, 10)
  this.potion = new Item("Potion", 2, 15)
  this.pass = new Item("Backstage passes to a TAFKAL80ETC concert", 12, 10)
})

describe("Gilded Rose", () => {
  describe("Testing for a simple Potion item", () => {
    it("should hold the item name", () => {
      const gildedRose = new Shop([this.potion]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toBe("Potion");
    });
  
    it("should degrade the item quality by 1", () => {
      const gildedRose = new Shop([this.potion]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(14);
    });
  
    it("should reduce the item sellin by 1", () => {
      const gildedRose = new Shop([this.potion]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(1);
    });

  })

  describe("Testing for an Aged Brie item", () => {
    it("should increase the item quality by 1 when the sellin date is positive", () => {
      const gildedRose = new Shop([this.brie]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(11);
    });
  
    it("should double the rate at which quality increases when the sellin drops to zero", () => {
      const gildedRose = new Shop([this.brie]);
      gildedRose.updateQuality();
      gildedRose.updateQuality();
      expect(gildedRose.items[0].sellIn).toBe(0);
      expect(gildedRose.items[0].quality).toBe(12);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].sellIn).toBe(-1);
      expect(gildedRose.items[0].quality).toBe(14);
    });

  })

  // describe("Testing for a Backstage Pass item", () => {
  //   it("should increase the item quality by 1 when the sellin date is > 10", () => {
  //     const gildedRose = new Shop([this.pass]);
  //     const items = gildedRose.updateQuality();
  //     expect(items[0].quality).toBe(11);
  //   });
  
  //   it("should double the rate at which quality increases when the sellin is < 11", () => {
  //     const gildedRose = new Shop([this.pass]);
  //     gildedRose.updateQuality();
  //     gildedRose.updateQuality();
  //     expect(gildedRose.items[0].sellIn).toBe(0);
  //     expect(gildedRose.items[0].quality).toBe(13);
  //   });

  // })
});
