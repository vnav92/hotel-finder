import { Hotel, Room } from '../../shared';
import { FilterConfig } from '../../components';
import {
  getHotelsWithStarNumberMatch,
  getRoomsByFilteredHotel,
  getTargetRoomsByHotel,
} from './hotel-list.utils';

describe('HotelListUtils', () => {
  it('should return correct result of getHotelsWithStarNumberMatch', () => {
    const mockConfig = [
      { name: 'test1', starRating: '1' },
      { name: 'test2', starRating: '2' },
      { name: 'test3', starRating: '3' },
    ] as Hotel[];

    expect(getHotelsWithStarNumberMatch(mockConfig, 1)).toEqual([
      mockConfig[0],
      mockConfig[1],
      mockConfig[2],
    ]);
    expect(getHotelsWithStarNumberMatch(mockConfig, 2)).toEqual([
      mockConfig[1],
      mockConfig[2],
    ]);
    expect(getHotelsWithStarNumberMatch(mockConfig, 3)).toEqual([
      mockConfig[2],
    ]);
  });

  it('should return correct result of getRoomsByFilteredHotel', () => {
    const mockFilteredHotels = [{ id: '1' }, { id: '2' }] as Hotel[];
    const mockRoomList = {
      '1': [{ name: 'room1' }] as Room[],
      '2': [{ name: 'room2' }] as Room[],
      '3': [{ name: 'room3' }] as Room[],
    };

    expect(getRoomsByFilteredHotel(mockFilteredHotels, mockRoomList)).toEqual({
      '1': mockRoomList['1'],
      '2': mockRoomList['2'],
    });
  });

  it('should return correct result of getTargetRoomsByHotel', () => {
    const mockRoomsByFilteredHotel = {
      '1': [
        { name: 'test1', occupancy: { maxAdults: 1, maxChildren: 1 } },
      ] as Room[],
      '2': [
        { name: 'test2', occupancy: { maxAdults: 1, maxChildren: 2 } },
      ] as Room[],
      '3': [
        { name: 'test3', occupancy: { maxAdults: 2, maxChildren: 2 } },
      ] as Room[],
    };

    const mockFilterValue = {
      numberOfAdults: 1,
      numberOfChildren: 2,
    } as FilterConfig;

    expect(
      getTargetRoomsByHotel(mockRoomsByFilteredHotel, mockFilterValue)
    ).toEqual({
      '1': [],
      '2': mockRoomsByFilteredHotel['2'],
      '3': mockRoomsByFilteredHotel['3'],
    });
  });
});
