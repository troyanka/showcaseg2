import getModuleInfo from './init.js'

const moduleInfo =  getModuleInfo();
export const moduleName = moduleInfo.module;
export const siteName = moduleInfo.site;
export const id = moduleInfo.id;
