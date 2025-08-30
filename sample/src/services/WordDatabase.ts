import Dexie, { Table } from 'dexie'
import { WordEntry } from '../types/game'

export class WordDatabase extends Dexie {
  words!: Table<WordEntry>

  constructor() {
    super('HollowWordGame')
    
    this.version(1).stores({
      words: 'id, difficulty, category, frequency'
    })

    this.on('populate', () => this.populateInitialData())
  }

  async getRandomWord(difficulty: number): Promise<WordEntry> {
    const words = await this.words
      .where('difficulty')
      .equals(difficulty)
      .toArray()
    
    if (words.length === 0) {
      // Fallback to any difficulty if none found
      const allWords = await this.words.toArray()
      if (allWords.length === 0) {
        throw new Error('No words available in database')
      }
      return allWords[Math.floor(Math.random() * allWords.length)]
    }

    return words[Math.floor(Math.random() * words.length)]
  }

  async getWordsByCategory(category: string): Promise<WordEntry[]> {
    return await this.words
      .where('category')
      .equals(category)
      .toArray()
  }

  async addCustomWords(words: WordEntry[]): Promise<void> {
    await this.words.bulkAdd(words)
  }

  private async populateInitialData() {
    const initialWords: WordEntry[] = [
      // Difficulty 1 (Easy - 4-5 letters)
      { id: '1', word: 'HELLO', difficulty: 1, category: 'common', frequency: 100 },
      { id: '2', word: 'WORLD', difficulty: 1, category: 'common', frequency: 95 },
      { id: '3', word: 'LIGHT', difficulty: 1, category: 'common', frequency: 90 },
      { id: '4', word: 'HOUSE', difficulty: 1, category: 'common', frequency: 85 },
      { id: '5', word: 'WATER', difficulty: 1, category: 'nature', frequency: 80 },
      
      // Difficulty 2 (Medium - 5-6 letters)
      { id: '6', word: 'PLANET', difficulty: 2, category: 'science', frequency: 70 },
      { id: '7', word: 'GARDEN', difficulty: 2, category: 'nature', frequency: 65 },
      { id: '8', word: 'FRIEND', difficulty: 2, category: 'social', frequency: 75 },
      { id: '9', word: 'BRIDGE', difficulty: 2, category: 'structure', frequency: 60 },
      { id: '10', word: 'CAMERA', difficulty: 2, category: 'technology', frequency: 55 },

      // Difficulty 3 (Hard - 6-7 letters)
      { id: '11', word: 'MYSTERY', difficulty: 3, category: 'abstract', frequency: 50 },
      { id: '12', word: 'JOURNEY', difficulty: 3, category: 'travel', frequency: 45 },
      { id: '13', word: 'KITCHEN', difficulty: 3, category: 'home', frequency: 55 },
      { id: '14', word: 'PICTURE', difficulty: 3, category: 'art', frequency: 40 },
      { id: '15', word: 'PACKAGE', difficulty: 3, category: 'objects', frequency: 35 },

      // Difficulty 4 (Very Hard - 7-8 letters)
      { id: '16', word: 'ELEPHANT', difficulty: 4, category: 'animals', frequency: 30 },
      { id: '17', word: 'SANDWICH', difficulty: 4, category: 'food', frequency: 25 },
      { id: '18', word: 'COMPUTER', difficulty: 4, category: 'technology', frequency: 40 },
      { id: '19', word: 'BIRTHDAY', difficulty: 4, category: 'celebration', frequency: 35 },
      { id: '20', word: 'AIRPLANE', difficulty: 4, category: 'transport', frequency: 30 },

      // Difficulty 5 (Expert - 8+ letters)
      { id: '21', word: 'BUTTERFLY', difficulty: 5, category: 'animals', frequency: 20 },
      { id: '22', word: 'TELESCOPE', difficulty: 5, category: 'science', frequency: 15 },
      { id: '23', word: 'ADVENTURE', difficulty: 5, category: 'abstract', frequency: 25 },
      { id: '24', word: 'CHOCOLATE', difficulty: 5, category: 'food', frequency: 30 },
      { id: '25', word: 'WONDERFUL', difficulty: 5, category: 'abstract', frequency: 20 }
    ]

    await this.words.bulkAdd(initialWords)
  }
}