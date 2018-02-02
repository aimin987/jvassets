import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

  modelCategories = [
    new Category(1, '陈设', 'setout', 3175, [
      new Category(1001, '饰品摆件', 'decorations', 944),
      new Category(1002, '花瓶花卉', 'vase', 247),
      new Category(1003, '生活用品', 'goods', 290)
    ]),
    new Category(2, '柜子', 'cabinet', 457, [
      new Category(2001, '边柜斗柜', 'sideboard ', 126),
      new Category(2002, '电视柜', 'tvbanch', 51)
    ]),
    new Category(3, '床具', 'bed', 457, [
      new Category(1001, '二级菜单', '1001', 400),
      new Category(1002, '二级菜单', '1002', 200)
    ]),
    new Category(2, '沙发', 'sofa', 457, [
      new Category(1001, '二级菜单', '1001', 400),
      new Category(1002, '二级菜单', '1002', 200)
    ]),
    new Category(2, '椅子', 'chair', 457, [
      new Category(1001, '二级菜单', '1001', 400),
      new Category(1002, '二级菜单', '1002', 200)
    ]),
    new Category(2, '灯具', 'lamp', 457, [
      new Category(1001, '二级菜单', '1001', 400),
      new Category(1002, '二级菜单', '1002', 200)
    ]),
    new Category(2, '植物', 'plant', 457, [
      new Category(1001, '二级菜单', '1001', 400),
      new Category(1002, '二级菜单', '1002', 200)
    ]),
    new Category(2, '电器', 'electrical', 457, [
      new Category(1001, '二级菜单', '1001', 400),
      new Category(1002, '二级菜单', '1002', 200)
    ]),
    new Category(2, '构件', 'component', 457, [
      new Category(1001, '二级菜单', '1001', 400),
      new Category(1002, '二级菜单', '1002', 200)
    ]),
    new Category(2, '厨卫', 'kitchen', 457, [
      new Category(1001, '二级菜单', '1001', 400),
      new Category(1002, '二级菜单', '1002', 200)
    ])
  ];

  materialCategories = [
    new Category(1, '皮革', 'model', 500, [
      new Category(1001, '二级菜单', '1001', 200),
      new Category(1002, '二级菜单', '1002', 300)
    ]),
    new Category(2, 'Substance', 'model', 600, [
      new Category(1001, '二级菜单', '1001', 400),
      new Category(1002, '二级菜单', '1002', 200)
    ]),
    new Category(2, '布料', 'model', 600, [
      new Category(1001, '二级菜单', '1001', 400),
      new Category(1002, '二级菜单', '1002', 200)
    ])
  ];

  constructor() { }

  getModelCategories() {
    return this.modelCategories;
  }

  getMaterialCategories() {
    return this.materialCategories;
  }

  getCategories(id: number) {
    switch (id) {
      case 2:
        return this.modelCategories;
      case 3:
        return this.materialCategories;
      default:
        return this.modelCategories;
    }
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
    public children: Category[] = null
  ) {
  }
}
