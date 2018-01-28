import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

  tabCategories = [
    new Category(1, '模型', 'model', 0, false),
    new Category(2, '材质', 'material', 0, false),
    new Category(3, '贴图', 'texture', 0, false)
  ];

  modelCategories = [
    new Category(1, '一级菜单', 'model', 500, false, [
      new Category(1001, '二级菜单', '1001', 200, false),
      new Category(1002, '二级菜单', '1002', 300)
    ]),
    new Category(2, '一级菜单', 'model', 600, false, [
      new Category(1001, '二级菜单', '1001', 400),
      new Category(1002, '二级菜单', '1002', 200)
    ])
  ];

  materialCategories = [
    new Category(1, '皮革', 'model', 500, false, [
      new Category(1001, '二级菜单', '1001', 200, false),
      new Category(1002, '二级菜单', '1002', 300)
    ]),
    new Category(2, 'Substance', 'model', 600, false, [
      new Category(1001, '二级菜单', '1001', 400),
      new Category(1002, '二级菜单', '1002', 200)
    ]),
    new Category(2, '布料', 'model', 600, false, [
      new Category(1001, '二级菜单', '1001', 400),
      new Category(1002, '二级菜单', '1002', 200)
    ])
  ];

  constructor() { }

  getTabCategories() {
    return this.tabCategories;
  }

  getModelCategories() {
    return this.modelCategories;
  }

  getMaterialCategories() {
    return this.materialCategories;
  }



}


/**
 * 分类
 */
export class Category {
  constructor(
    public id: number,
    public title: string,
    public path: string,
    public badge: number,
    public actived: boolean = false,
    public children: Category[] = null
  ) {
  }
}
