import * as API from '../../main/scripts/api';
import * as MockSettingsUtils from '../../main/scripts/settings-utils';

jest.mock('../../main/scripts/settings-utils');
const SettingsUtils = jest.mocked(MockSettingsUtils, true);

describe('registerApi', () => {
    test('WHEN called THEN calls SettingsUtils.registerApi with correct values', () => {
        API.registerApi();

        expect(SettingsUtils.registerAPI).toHaveBeenCalledWith({});
    });
});