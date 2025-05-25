import { validateFolderLoader, ALLOWED_FOLDERS } from '../validateFolderLoader';

jest.mock('react-router', () => ({
  redirect: jest.fn((path) => `redirect:${path}`),
}));

describe('validateFolderLoader', () => {
  it('should return folder if valid', async () => {
    for (const folder of ALLOWED_FOLDERS) {
      const result = await validateFolderLoader({ params: { folder } });
      expect(result).toEqual({ folder });
    }
  });

  it('should redirect to not found page if folder is invalid', async () => {
    const result = await validateFolderLoader({
      params: { folder: 'unknown' },
    });
    expect(result).toBe('redirect:/not-found');
  });
});
