'use strict';

import Tile from './Tile';
import Assert from './../../../JSAssert/Assert';

export default class Area
{
    constructor(name)
    {
        this._name = name;
        this._tiles = new Map();
    }

    /**
     * @param tile
     */
    addTile(tile)
    {
        Assert.instanceOf(tile, Tile);

        this._tiles.set(tile.toString(), tile);
    }

    /**
     * @param {Tile[]} tiles
     */
    setTiles(tiles)
    {
        Assert.containsOnly(tiles, Tile);

        this._tiles.clear();

        for (let tile of tiles) {
            this._tiles.set(tile.toString(), tile);
        }
    }

    /**
     * @returns {Tile[]}
     */
    tiles()
    {
        return this._tiles;
    }

    /**
     * @param {int} x
     * @param {int} y
     * @returns {boolean}
     */
    canWalkOn(x, y)
    {
        let tile = this._tiles.get(`${x}:${y}`);

        if (tile === undefined) {
            return false;
        }

        return tile.canWalkOn();
    }

    /**
     * @param {int} x
     * @param {int} y
     */
    tile(x, y)
    {
        Assert.integer(x);
        Assert.integer(y);

        return this._tiles.get(`${x}:${y}`);
    }
}