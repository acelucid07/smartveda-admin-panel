"use strict";(self.webpackChunkAdmin_Panel=self.webpackChunkAdmin_Panel||[]).push([[567],{4567:(ut,x,l)=>{l.r(x),l.d(x,{ContentManagementModule:()=>mt});var y=l(9808),u=l(1083),s=l(3075),p=l(8441),t=l(5e3),C=l(7650),c=l(520),h=l(9646),M=l(2076);l(2340);let Z=[{id:2,name:"Electronics",image:"test image",hyperlink:"www.goolge.com",position:"head"},{id:3,name:"Mobiles, Tablets & More",image:"test2 image",hyperlink:"www.goolge.com",position:"head"},{id:4,name:"Men's Fashion & Accessories",image:"test4 image",hyperlink:"www.goolge.com",position:"head"},{id:5,name:"Women's Fashion & Accessories",image:"test5 image",hyperlink:"www.goolge.com",position:"head"},{id:6,name:"testig",image:"test6 image",hyperlink:"www.goolge.com",position:"left"},{id:7,name:"testing ck",image:"test7 image",hyperlink:"www.goolge.com",position:"left"},{name:"testing ck",image:"test8 image",hyperlink:"www.goolge.com",position:"left",id:8}],b=[{id:2,name:"Football",image:"test image",hyperlink:"www.goolge.com",parent_category:{id:"1",name:"Sports & Fitness"}},{id:4,name:"Fitness Accessories",image:"test2 image",hyperlink:"www.goolge.com",parent_category:{id:1,name:"Sports & Fitness"}},{id:5,name:"Strength Training",image:"test3 image",hyperlink:"www.goolge.com",parent_category:{id:1,name:"Sports & Fitness"}},{id:6,name:"Televisions",image:"test4 image",hyperlink:"www.goolge.com",parent_category:{id:2,name:"Electronics"}},{id:7,name:"Headphones",image:"test5 image",hyperlink:"www.goolge.com",parent_category:{id:2,name:"Electronics"}},{id:8,name:"Home Entertainment Systems",image:"test6 image",hyperlink:"www.goolge.com",parent_category:{id:2,name:"Electronics"}},{id:9,name:"Cameras and DSLR Cameras",image:"test9 image",hyperlink:"www.goolge.com",parent_category:{id:2,name:"Electronics"}},{id:10,name:"Musical Instruments & professionals Audio",image:"test10 image",hyperlink:"www.goolge.com",parent_category:{id:2,name:"Electronics"}},{id:11,name:"Gaming Consoles",image:"test11 image",hyperlink:"www.goolge.com",parent_category:{id:2,name:"Electronics"}},{id:12,name:"Mobiles & Smart Phones",image:"test12 image",hyperlink:"www.goolge.com",parent_category:{id:3,name:"Mobiles, Tablets & More"}},{id:13,name:"Cases and Covers",image:"test13 image",hyperlink:"www.goolge.com",parent_category:{id:3,name:"Mobiles, Tablets & More"}},{id:14,name:"Screen Protectors",image:"test14 image",hyperlink:"www.goolge.com",parent_category:{id:3,name:"Mobiles, Tablets & More"}},{id:15,name:"Power Banks",image:"test16 image",hyperlink:"www.goolge.com",parent_category:{id:3,name:"Mobiles, Tablets & More"}},{id:16,name:"Tablets",image:"test image",hyperlink:"www.goolge.com",parent_category:{id:"3",name:"Mobiles, Tablets & More"}},{id:17,name:"Smart watches and Wearables",image:"test image",hyperlink:"www.goolge.com",parent_category:{id:"3",name:"Mobiles, Tablets & More"}},{id:18,name:"Clothings",image:"test image",hyperlink:"www.goolge.com",parent_category:{id:"4",name:"Men's Fashion & Accessories"}},{id:19,name:"T-shirts and Polos",image:"test image",hyperlink:"www.goolge.com",parent_category:{id:"4",name:"Men's Fashion & Accessories"}},{id:20,name:"Shirts",image:"test image",hyperlink:"www.goolge.com",parent_category:{id:"4",name:"Men's Fashion & Accessories"}},{id:21,name:"Jeans",image:"test image",hyperlink:"www.goolge.com",parent_category:{id:"4",name:"Men's Fashion & Accessories"}},{id:22,name:"Innerware",image:"test image",hyperlink:"www.goolge.com",parent_category:{id:"4",name:"Men's Fashion & Accessories"}},{id:23,name:"Watches",image:"test image",hyperlink:"www.goolge.com",parent_category:{id:"4",name:"Men's Fashion & Accessories"}},{id:24,name:"Sunglasses",image:"test image",hyperlink:"www.goolge.com",parent_category:{id:"4",name:"Men's Fashion & Accessories"}},{name:"hb sjb sbj bjsb jhs`",image:"bh djshgbhjsdnjsb",hyperlink:"B JBJSB SJB",parent_category:{id:"145",name:"hjcb shs bhb"},id:25}],f=[{id:1,name:"Rohan kumar",email:"jbdvd@gmail.com",phone:"6592555999",funding:"$54488",address:{city:"DDn",street:"Neharu",landmark:"jumpStart",state:"Uttarakhand",zip:"54488",country:"India"}},{id:2,name:"Rakesh",email:"rakseh45@gmail.com",phone:"693655496587",funding:"$487878",address:{city:"Delhi",street:"sector45",landmark:"kailash tower",state:"Delhi",zip:"58796",country:"India"}},{id:3,name:" mohan",email:"mohan@gmail.com",phone:"685974155",funding:"$4577",address:{city:"DDN",street:"main road",landmark:"kailsh tower",state:"uttarakhand",zip:"65988",country:" India"}},{id:4,name:"Rohan kumar",email:"rohan@mail.com",phone:"321232132",funding:"$321323",address:{city:"DDN",street:"main road",landmark:"kailsh tower",state:"uttarakhand",zip:"65988",country:" India"}}],S=(()=>{class o{constructor(e){this.http=e}getCategoryList(){const e=localStorage.getItem("token")||"";return(new c.WM).set("x-access-token",e),(0,h.of)(Z)}getCategoryById(e){const n=localStorage.getItem("token")||"";(new c.WM).set("x-access-token",n);let d=Z.map(g=>g);return(0,M.D)(d)}addCategory(e){const n=localStorage.getItem("token")||"";return(new c.WM).set("x-access-token",n),e.id=Z.length+1,Z.push(e),(0,h.of)(e)}editCategory(e,n){const i=localStorage.getItem("token")||"";(new c.WM).set("x-access-token",i);let g=Z.findIndex(q=>q.id==n);return Z[g]=e,(0,h.of)(g)}deleteCategory(e){const n=localStorage.getItem("token")||"";(new c.WM).set("x-access-token",n);let d=Z.map(g=>g);return Z.splice(Z.findIndex(g=>g.id==e),1),(0,h.of)(d)}getSubCategoryList(){(0,M.D)(b);const n=localStorage.getItem("token")||"";return(new c.WM).set("x-access-token",n),(0,h.of)(b)}getSubCategoryListById(e){const n=localStorage.getItem("token")||"";(new c.WM).set("x-access-token",n);let d=b.findIndex(g=>g.id==e);return(0,h.of)(b[d])}addSubCategory(e){const n=localStorage.getItem("token")||"";return(new c.WM).set("x-access-token",n),e.id=b.length+1,b.push(e),(0,h.of)(e)}editSubCategory(e,n){const i=localStorage.getItem("token")||"";(new c.WM).set("x-access-token",i);let g=b.findIndex(q=>q.id==n);return b[g]=e,(0,h.of)(e)}deleteSubCategory(e){const n=localStorage.getItem("token")||"";(new c.WM).set("x-access-token",n);let d=b.map(g=>g);return Z.splice(b.findIndex(g=>g.id==e),1),(0,h.of)(d)}getSponsorList(){const e=localStorage.getItem("token")||"";return(new c.WM).set("x-access-token",e),(0,h.of)(f)}getSponsorDetailsById(e){const n=localStorage.getItem("token")||"";(new c.WM).set("x-access-token",n);let d=f.findIndex(g=>g.id===e);return(0,h.of)(f[d])}addSponsor(e){const n=localStorage.getItem("token")||"";return(new c.WM).set("x-access-token",n),e.id=f.length+1,f.push(e),(0,h.of)(e)}editSponsor(e,n){const i=localStorage.getItem("token")||"";(new c.WM).set("x-access-token",i);let g=f.findIndex(q=>q.id==n);return f[g]=e,(0,h.of)(e)}deleteSponsor(e){const n=localStorage.getItem("token")||"";(new c.WM).set("x-access-token",n);let d=f.map(g=>g);return f.splice(f.findIndex(g=>g.id==e),1),(0,h.of)(d)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(c.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var _=l(7398),T=l(845);const F=function(){return["/crm/category"]};let O=(()=>{class o{constructor(e,n,i,a,d,g){this.fb=e,this.activateRoute=n,this.ngxLoader=i,this.route=a,this.toastr=d,this.CmsService=g,this.title=" ",this.editMode=!1,this.categoryForm=this.fb.group({name:["",[s.kI.required]],image:["",[s.kI.required]],hyperlink:["",[s.kI.required]],position:["",[s.kI.required]]})}ngOnInit(){this.fgsType=p.aS.squareLoader,this.ngxLoader.start(),this.sidebarSpacing="contracted",this.activateRoute.queryParamMap.subscribe(e=>{this.id=e.get("id"),this.id&&null!=this.id?(this.editMode=!0,this.title="Edit Category",this.getCategoryById()):(this.editMode=!1,this.title="Add New Category")})}getCategoryById(){this.CmsService.getCategoryById(this.id).subscribe(e=>{this.categoryForm.patchValue({id:e.id,name:e.name,image:e.image,position:e.position,hyperlink:e.hyperlink}),console.log(this.categoryForm.value),this.ngxLoader.stop()})}submitForm(){this.ngxLoader.start(),this.editMode?this.editCategory():this.addCategory()}addCategory(){this.CmsService.addCategory(this.categoryForm.value).subscribe(e=>{e&&(this.toastr.showSuccess("Category added successfully","Category Added"),this.ngxLoader.stop(),this.route.navigate(["/crm/category"]))})}editCategory(){this.CmsService.editCategory(this.categoryForm.value,this.id).subscribe(e=>{e&&(this.toastr.showSuccess("Category edit successfully","Category edit"),this.ngxLoader.stop(),this.route.navigate(["/crm/category"]))})}onToggleSidebar(e){this.sidebarSpacing="open"===e?"contracted":"expanded"}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(s.qu),t.Y36(u.gz),t.Y36(p.LA),t.Y36(u.F0),t.Y36(C.$),t.Y36(S))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-edit-category"]],decls:39,vars:5,consts:[[3,"toggleSidebar"],[1,"body","bcard",3,"ngClass"],[3,"formGroup"],[1,"card","col-sm-12"],[1,"row","gutters"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","col-12"],[1,"h-100","mt-5"],[1,"card-body"],[1,"mb-2","text-primary"],[1,"col-xl-6","col-lg-6","col-md-6","col-sm-6","col-12"],[1,"form-group"],["for","name"],["type","text","formControlName","name",1,"form-control"],["for","image"],["type","text","formControlName","image",1,"form-control"],["for","hyperlink"],["type","url","formControlName","hyperlink",1,"form-control"],["for","Name"],["type","text","formControlName","position",1,"form-control"],[1,"row","gutters","mt-4"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","col-12","mt-4"],[1,"text-right"],["pButton","","type","button","id","submit","name","submit",1,"p-button-danger","mr-4",3,"routerLink"],["pButton","","type","button","id","submit","name","submit",1,"p-button-success",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"app-header",0),t.NdJ("toggleSidebar",function(a){return n.onToggleSidebar(a)}),t.qZA(),t.TgZ(1,"div",1),t.TgZ(2,"form",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.TgZ(6,"div",6),t.TgZ(7,"div",7),t.TgZ(8,"div",4),t.TgZ(9,"div",5),t.TgZ(10,"h6",8),t._uU(11),t.qZA(),t.qZA(),t.TgZ(12,"div",9),t.TgZ(13,"div",10),t.TgZ(14,"label",11),t._uU(15,"Name"),t.qZA(),t._UZ(16,"input",12),t.qZA(),t.qZA(),t.TgZ(17,"div",9),t.TgZ(18,"div",10),t.TgZ(19,"label",13),t._uU(20,"ImageName"),t.qZA(),t._UZ(21,"input",14),t.qZA(),t.qZA(),t.TgZ(22,"div",9),t.TgZ(23,"div",10),t.TgZ(24,"label",15),t._uU(25,"Hyperlink"),t.qZA(),t._UZ(26,"input",16),t.qZA(),t.qZA(),t.TgZ(27,"div",9),t.TgZ(28,"div",10),t.TgZ(29,"label",17),t._uU(30,"Position"),t.qZA(),t._UZ(31,"input",18),t.qZA(),t.qZA(),t.qZA(),t.TgZ(32,"div",19),t.TgZ(33,"div",20),t.TgZ(34,"div",21),t.TgZ(35,"button",22),t._uU(36,"Cancel"),t.qZA(),t.TgZ(37,"button",23),t.NdJ("click",function(){return n.submitForm()}),t._uU(38,"Submit"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngClass",n.sidebarSpacing),t.xp6(1),t.Q6J("formGroup",n.categoryForm),t.xp6(9),t.Oqu(n.title),t.xp6(24),t.Q6J("routerLink",t.DdM(4,F)))},directives:[_.G,y.mk,s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,T.Hq,u.rH],styles:[""]}),o})();const N=function(){return["/crm/subcategory"]};let U=(()=>{class o{constructor(e,n,i,a,d,g){this.activateRoute=n,this.CmsService=i,this.route=a,this.toastr=d,this.ngxLoader=g,this.title=" ",this.editMode=!1,this.subCategoryForm=e.group({name:["",[s.kI.required]],image:["",[s.kI.required]],hyperlink:["",[s.kI.required]],parentCategoryId:[null,[s.kI.required]],parentCategoryName:[null,[s.kI.required]]})}ngOnInit(){this.fgsType=p.aS.squareLoader,this.ngxLoader.start(),this.sidebarSpacing="contracted",this.activateRoute.queryParamMap.subscribe(e=>{this.id=e.get("id"),this.id&&null!=this.id?(this.editMode=!0,this.title="Edit Sub_Category",this.getSubCategoryById()):(this.editMode=!1,this.title="Add  Sub_Category")})}onToggleSidebar(e){this.sidebarSpacing="open"===e?"contracted":"expanded"}getSubCategoryById(){this.CmsService.getSubCategoryListById(this.id).subscribe(e=>{this.subCategoryForm.patchValue({id:e.id,name:e.name,image:e.image,hyperlink:e.hyperlink,parentCategoryId:e.parent_category.id,parentCategoryName:e.parent_category.name}),console.log(this.subCategoryForm.value),this.ngxLoader.stop()})}submitForm(){this.ngxLoader.start(),this.editMode?this.editSubCategory():this.addSubCategory()}addSubCategory(){this.CmsService.addSubCategory({name:this.subCategoryForm.controls.name.value,image:this.subCategoryForm.controls.image.value,hyperlink:this.subCategoryForm.controls.hyperlink.value,parent_category:{id:this.subCategoryForm.controls.parentCategoryId.value,name:this.subCategoryForm.controls.parentCategoryName.value}}).subscribe(n=>{n&&(this.toastr.showSuccess("subCategory added successfully","SubCategory Added"),this.ngxLoader.stop(),this.route.navigate(["crm/subcategory"]))})}editSubCategory(){this.CmsService.editSubCategory({id:this.id,name:this.subCategoryForm.controls.name.value,image:this.subCategoryForm.controls.image.value,hyperlink:this.subCategoryForm.controls.hyperlink.value,parent_category:{id:this.subCategoryForm.controls.parentCategoryId.value,name:this.subCategoryForm.controls.parentCategoryName.value}},this.id).subscribe(n=>{n&&(this.toastr.showSuccess("SubCategory edit successfully","SubCategory edit"),this.ngxLoader.stop(),this.route.navigate(["/crm/subcategory"]))})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(s.qu),t.Y36(u.gz),t.Y36(S),t.Y36(u.F0),t.Y36(C.$),t.Y36(p.LA))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-edit-subcategory"]],decls:44,vars:5,consts:[[3,"toggleSidebar"],[1,"body","bcard",3,"ngClass"],[3,"formGroup"],[1,"card","col-sm-12"],[1,"row","gutters"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","col-12"],[1,"h-100","mt-5"],[1,"card-body"],[1,"mb-2","text-primary"],[1,"col-xl-6","col-lg-6","col-md-6","col-sm-6","col-12"],[1,"form-group"],["for","name"],["type","text","formControlName","name",1,"form-control"],["for","image"],["type","text","formControlName","image",1,"form-control"],["for","hyperlink"],["type","url","formControlName","hyperlink",1,"form-control"],["for","Name"],["type","text","formControlName","parentCategoryId",1,"form-control"],["type","text","formControlName","parentCategoryName",1,"form-control"],[1,"row","gutters","mt-4"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","col-12","mt-4"],[1,"text-right"],["pButton","","type","button","id","submit","name","submit",1,"p-button-danger","mr-4",3,"routerLink"],["pButton","","type","button","id","submit","name","submit",1,"p-button-success",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"app-header",0),t.NdJ("toggleSidebar",function(a){return n.onToggleSidebar(a)}),t.qZA(),t.TgZ(1,"div",1),t.TgZ(2,"form",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.TgZ(6,"div",6),t.TgZ(7,"div",7),t.TgZ(8,"div",4),t.TgZ(9,"div",5),t.TgZ(10,"h6",8),t._uU(11),t.qZA(),t.qZA(),t.TgZ(12,"div",9),t.TgZ(13,"div",10),t.TgZ(14,"label",11),t._uU(15,"Name"),t.qZA(),t._UZ(16,"input",12),t.qZA(),t.qZA(),t.TgZ(17,"div",9),t.TgZ(18,"div",10),t.TgZ(19,"label",13),t._uU(20,"ImageName"),t.qZA(),t._UZ(21,"input",14),t.qZA(),t.qZA(),t.TgZ(22,"div",9),t.TgZ(23,"div",10),t.TgZ(24,"label",15),t._uU(25,"Hyperlink"),t.qZA(),t._UZ(26,"input",16),t.qZA(),t.qZA(),t.TgZ(27,"div",9),t.TgZ(28,"div",10),t.TgZ(29,"label",17),t._uU(30,"ParentId"),t.qZA(),t._UZ(31,"input",18),t.qZA(),t.qZA(),t.TgZ(32,"div",9),t.TgZ(33,"div",10),t.TgZ(34,"label",17),t._uU(35,"Parent Category Name"),t.qZA(),t._UZ(36,"input",19),t.qZA(),t.qZA(),t.qZA(),t.TgZ(37,"div",20),t.TgZ(38,"div",21),t.TgZ(39,"div",22),t.TgZ(40,"button",23),t._uU(41,"Cancel"),t.qZA(),t.TgZ(42,"button",24),t.NdJ("click",function(){return n.submitForm()}),t._uU(43,"Submit"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngClass",n.sidebarSpacing),t.xp6(1),t.Q6J("formGroup",n.subCategoryForm),t.xp6(9),t.Oqu(n.title),t.xp6(29),t.Q6J("routerLink",t.DdM(4,N)))},directives:[_.G,y.mk,s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,T.Hq,u.rH],styles:["body[_ngcontent-%COMP%]{margin:0;padding-top:40px;color:#2e323c;background:#f5f6fa;position:relative;height:100%}.account-settings[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]{margin:0 0 1rem;padding-bottom:1rem;text-align:center}.account-settings[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]{margin:0 0 1rem}.account-settings[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:90px;height:90px;border-radius:100px}.account-settings[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   h5.user-name[_ngcontent-%COMP%]{margin:0 0 .5rem}.account-settings[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   h6.user-email[_ngcontent-%COMP%]{margin:0;font-size:.8rem;font-weight:400;color:#9fa8b9}.account-settings[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 0 15px;color:#007ae1}.account-settings[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.825rem}.form-control[_ngcontent-%COMP%]{border:1px solid #cfd1d8;border-radius:10px;font-size:1rem;background:#ffffff;color:#2e323c;height:58px}.card[_ngcontent-%COMP%]{background:#ffffff;border-radius:5px;border:0;margin-bottom:1rem}"]}),o})();var A=l(8581),v=l(9783),k=l(1424),w=l(4119);const I=function(){return["/crm/addcategory"]};function E(o,r){1&o&&(t.TgZ(0,"div",11),t.TgZ(1,"span",12),t._UZ(2,"i",13),t._UZ(3,"input",14),t.qZA(),t.TgZ(4,"span",12),t._UZ(5,"button",15),t.qZA(),t.qZA()),2&o&&(t.xp6(5),t.Q6J("routerLink",t.DdM(1,I)))}function P(o,r){if(1&o&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&o){const e=r.$implicit;t.xp6(1),t.Oqu(e.headers)}}function J(o,r){if(1&o&&(t.TgZ(0,"tr"),t.YNc(1,P,2,1,"th",16),t.TgZ(2,"th"),t._uU(3,"Options"),t.qZA(),t.qZA()),2&o){const e=r.$implicit;t.xp6(1),t.Q6J("ngForOf",e)}}const R=function(){return["/crm/editcategory"]},$=function(o){return{id:o}};function Y(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._UZ(12,"button",17),t.TgZ(13,"button",18),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw().deleteCategory(a)}),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=r.$implicit;t.xp6(2),t.Oqu(e.id),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.image),t.xp6(2),t.Oqu(e.hyperlink),t.xp6(2),t.Oqu(e.position),t.xp6(2),t.Q6J("routerLink",t.DdM(7,R))("queryParams",t.VKq(8,$,null==e?null:e.id))}}const B=function(){return["email","phone","role","status"]};let Q=(()=>{class o{constructor(e,n,i){this.ngxLoader=e,this.CmsService=n,this.toastr=i,this.categoryList=[]}ngOnInit(){this.fgsType=p.aS.squareLoader,this.ngxLoader.start(),this.sidebarSpacing="contracted",this.cols=[{field:"id",show:!0,headers:"Id"},{field:"name",show:!0,headers:"Name"},{field:"image",show:!0,headers:"ImageName"},{field:"hyperlink",show:!0,headers:"Hyperlink"},{field:"position",show:!0,headers:"Position"}],this.getCategoryList()}onToggleSidebar(e){this.sidebarSpacing="open"===e?"contracted":"expanded"}getCategoryList(){this.CmsService.getCategoryList().subscribe(e=>{this.categoryList=e,console.log(this.categoryList),this.ngxLoader.stop()})}deleteCategory(e){this.ngxLoader.start(),this.CmsService.deleteCategory(e.id).subscribe(n=>{n&&(this.toastr.showSuccess("sponsor deleted successfully","sponsor delete"),this.getCategoryList())})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(p.LA),t.Y36(S),t.Y36(C.$))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-category"]],decls:12,vars:11,consts:[[3,"toggleSidebar"],[1,"body","bcard",3,"ngClass"],[1,"page-heading"],[1,"header-text-title",2,"margin-left","1%"],[1,"card","col-sm-12",2,"border","none"],["id","customerTable","responsiveLayout","scroll","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","styleClass","p-datatable-striped",3,"columns","paginator","rows","showCurrentPageReport","value","responsive","globalFilterFields"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[3,"fgsColor","fgsType"],[1,"row"],[1,"p-input-icon-right","ml-5"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search keyword"],["pButton","","type","button","label","Add Category",1,"p-button-success",3,"routerLink"],[4,"ngFor","ngForOf"],["pButton","","type","button","icon","pi pi-user-edit","pTooltip","Edit Category","tooltipPosition","bottom",1,"p-button-warning",2,"margin-right","5px",3,"routerLink","queryParams"],["pButton","","type","button","icon","pi pi-trash","pTooltip","Delete Category","tooltipPosition","bottom",1,"p-button-danger",2,"margin-right","5px",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"app-header",0),t.NdJ("toggleSidebar",function(a){return n.onToggleSidebar(a)}),t.qZA(),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"h1",3),t._uU(4,"Category"),t.qZA(),t.qZA(),t.TgZ(5,"div",4),t.TgZ(6,"p-table",5,6),t.YNc(8,E,6,2,"ng-template",7),t.YNc(9,J,4,1,"ng-template",8),t.YNc(10,Y,14,10,"ng-template",9),t.qZA(),t._UZ(11,"ngx-ui-loader",10),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngClass",n.sidebarSpacing),t.xp6(5),t.Q6J("columns",n.cols)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("value",n.categoryList)("responsive",!0)("globalFilterFields",t.DdM(10,B)),t.xp6(5),t.Q6J("fgsColor","#000000")("fgsType",n.fgsType))},directives:[_.G,y.mk,A.iA,v.jx,k.o,T.Hq,u.rH,y.sg,w.u,p.Eo],styles:["th[_ngcontent-%COMP%]{background-color:#285d91!important;color:#fff!important}td[_ngcontent-%COMP%]{text-align:center!important;font-size:200!important}"]}),o})();const j=function(){return["/crm/addsubcategory"]};function z(o,r){1&o&&(t.TgZ(0,"div",11),t.TgZ(1,"span",12),t._UZ(2,"i",13),t._UZ(3,"input",14),t.qZA(),t.TgZ(4,"span",12),t._UZ(5,"button",15),t.qZA(),t.qZA()),2&o&&(t.xp6(5),t.Q6J("routerLink",t.DdM(1,j)))}function D(o,r){if(1&o&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&o){const e=r.$implicit;t.xp6(1),t.Oqu(e.headers)}}function H(o,r){if(1&o&&(t.TgZ(0,"tr"),t.YNc(1,D,2,1,"th",16),t.TgZ(2,"th"),t._uU(3,"Options"),t.qZA(),t.qZA()),2&o){const e=r.$implicit;t.xp6(1),t.Q6J("ngForOf",e)}}const V=function(){return["/crm/editsubcategory"]},W=function(o){return{id:o}};function G(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._UZ(14,"button",17),t.TgZ(15,"button",18),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw().deleteSubCategory(a)}),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=r.$implicit;t.xp6(2),t.Oqu(e.id),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.image),t.xp6(2),t.Oqu(e.hyperlink),t.xp6(2),t.Oqu(null==e.parent_category?null:e.parent_category.id),t.xp6(2),t.Oqu(null==e.parent_category?null:e.parent_category.name),t.xp6(2),t.Q6J("routerLink",t.DdM(8,V))("queryParams",t.VKq(9,W,null==e?null:e.id))}}const X=function(){return["email","phone","role","status"]};let K=(()=>{class o{constructor(e,n,i){this.ngxLoader=e,this.CmsService=n,this.toastr=i,this.subCategoryList=[]}ngOnInit(){this.fgsType=p.aS.squareLoader,this.ngxLoader.start(),this.sidebarSpacing="contracted",this.cols=[{field:"id",show:!0,headers:"Id"},{field:"name",show:!0,headers:"Name"},{field:"image",show:!0,headers:"ImageName"},{field:"hyperlink",show:!0,headers:"Hyperlink"},{field:"parent_id",show:!0,headers:"Parent Id"},{field:"parent_name",show:!0,headers:"Parent Name"}],this.getSubCategoryList()}onToggleSidebar(e){this.sidebarSpacing="open"===e?"contracted":"expanded"}getSubCategoryList(){this.CmsService.getSubCategoryList().subscribe(e=>{this.subCategoryList=e,this.ngxLoader.stop()})}deleteSubCategory(e){this.ngxLoader.start(),this.CmsService.deleteSubCategory(e.id).subscribe(n=>{n&&(this.toastr.showSuccess("subCategory deleted successfully","subCategory delete"),this.getSubCategoryList())})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(p.LA),t.Y36(S),t.Y36(C.$))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-sub-category"]],decls:12,vars:11,consts:[[3,"toggleSidebar"],[1,"body","bcard",3,"ngClass"],[1,"page-heading"],[1,"header-text-title",2,"margin-left","1%"],[1,"card","col-sm-12",2,"border","none"],["id","customerTable","responsiveLayout","scroll","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","styleClass","p-datatable-striped",3,"columns","paginator","rows","showCurrentPageReport","value","responsive","globalFilterFields"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[3,"fgsColor","fgsType"],[1,"row"],[1,"p-input-icon-right","ml-5"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search keyword"],["pButton","","type","button","label","Add SubCategory",1,"p-button-success",3,"routerLink"],[4,"ngFor","ngForOf"],["pButton","","type","button","icon","pi pi-user-edit","pTooltip","Edit Customer","tooltipPosition","bottom",1,"p-button-warning",2,"margin-right","5px",3,"routerLink","queryParams"],["pButton","","type","button","icon","pi pi-trash","pTooltip","Delete Sub-category","tooltipPosition","bottom",1,"p-button-danger",2,"margin-right","5px",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"app-header",0),t.NdJ("toggleSidebar",function(a){return n.onToggleSidebar(a)}),t.qZA(),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"h1",3),t._uU(4,"Sub-Category"),t.qZA(),t.qZA(),t.TgZ(5,"div",4),t.TgZ(6,"p-table",5,6),t.YNc(8,z,6,2,"ng-template",7),t.YNc(9,H,4,1,"ng-template",8),t.YNc(10,G,16,11,"ng-template",9),t.qZA(),t._UZ(11,"ngx-ui-loader",10),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngClass",n.sidebarSpacing),t.xp6(5),t.Q6J("columns",n.cols)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("value",n.subCategoryList)("responsive",!0)("globalFilterFields",t.DdM(10,X)),t.xp6(5),t.Q6J("fgsColor","#000000")("fgsType",n.fgsType))},directives:[_.G,y.mk,A.iA,v.jx,k.o,T.Hq,u.rH,y.sg,w.u,p.Eo],styles:["th[_ngcontent-%COMP%]{background-color:#285d91!important;color:#fff!important}td[_ngcontent-%COMP%]{text-align:center!important;font-size:200!important}"]}),o})();const tt=function(){return["/crm/addsponsor"]};function et(o,r){1&o&&(t.TgZ(0,"div",11),t.TgZ(1,"span",12),t._UZ(2,"i",13),t._UZ(3,"input",14),t.qZA(),t.TgZ(4,"span",12),t._UZ(5,"button",15),t.qZA(),t.qZA()),2&o&&(t.xp6(5),t.Q6J("routerLink",t.DdM(1,tt)))}function ot(o,r){if(1&o&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&o){const e=r.$implicit;t.xp6(1),t.Oqu(e.headers)}}function nt(o,r){if(1&o&&(t.TgZ(0,"tr"),t.YNc(1,ot,2,1,"th",16),t.TgZ(2,"th"),t._uU(3,"Options"),t.qZA(),t.qZA()),2&o){const e=r.$implicit;t.xp6(1),t.Q6J("ngForOf",e)}}const rt=function(){return["/crm/editsponsor"]},it=function(o){return{id:o}};function st(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.qZA(),t.TgZ(23,"td"),t._UZ(24,"button",17),t.TgZ(25,"button",18),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw().deleteSponsor(a)}),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=r.$implicit;t.xp6(2),t.Oqu(e.id),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.email),t.xp6(2),t.Oqu(e.phone),t.xp6(2),t.Oqu(e.funding),t.xp6(2),t.Oqu(e.address.city),t.xp6(2),t.Oqu(e.address.street),t.xp6(2),t.Oqu(e.address.landmark),t.xp6(2),t.Oqu(e.address.state),t.xp6(2),t.Oqu(e.address.zip),t.xp6(2),t.Oqu(e.address.country),t.xp6(2),t.Q6J("routerLink",t.DdM(13,rt))("queryParams",t.VKq(14,it,null==e?null:e.id))}}const at=function(){return["email","phone","role","status"]};let gt=(()=>{class o{constructor(e,n,i){this.ngxLoader=e,this.CmsService=n,this.toastr=i,this.sponsorList=[]}ngOnInit(){this.fgsType=p.aS.squareLoader,this.ngxLoader.start(),this.sidebarSpacing="contracted",this.cols=[{field:"id",show:!0,headers:"ID"},{field:"name",show:!0,headers:"name"},{field:"email",show:!0,headers:"sponsor Email"},{field:"phone",show:!0,headers:"phone No"},{field:"funding",show:!0,headers:"funding"},{field:"city ",show:!0,headers:"City "},{field:"street ",show:!0,headers:"Street "},{field:"landmark ",show:!0,headers:"Landmark "},{field:"state ",show:!0,headers:"State "},{field:"zip ",show:!0,headers:"Zip Code "},{field:"country ",show:!0,headers:"Country "}],this.getSponsorList()}onToggleSidebar(e){this.sidebarSpacing="open"===e?"contracted":"expanded"}getSponsorList(){this.CmsService.getSponsorList().subscribe(e=>{this.sponsorList=e,this.ngxLoader.stop()})}deleteSponsor(e){this.ngxLoader.start(),this.CmsService.deleteSponsor(e.id).subscribe(n=>{n&&(this.toastr.showSuccess("category deleted successfully","category delete"),this.getSponsorList())})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(p.LA),t.Y36(S),t.Y36(C.$))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-sponsor"]],decls:12,vars:11,consts:[[3,"toggleSidebar"],[1,"body","bcard",3,"ngClass"],[1,"page-heading"],[1,"header-text-title",2,"margin-left","1%"],[1,"card","col-sm-12",2,"border","none"],["id","customerTable","responsiveLayout","scroll","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","styleClass","p-datatable-striped",3,"columns","paginator","rows","showCurrentPageReport","value","responsive","globalFilterFields"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[3,"fgsColor","fgsType"],[1,"row"],[1,"p-input-icon-right","ml-5"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search keyword"],["pButton","","type","button","label","Add Sponsor",1,"p-button-success",3,"routerLink"],[4,"ngFor","ngForOf"],["pButton","","type","button","icon","pi pi-user-edit","pTooltip","Edit Customer","tooltipPosition","bottom",1,"p-button-warning",2,"margin-right","5px",3,"routerLink","queryParams"],["pButton","","type","button","icon","pi pi-trash","pTooltip","Delete Sponsor","tooltipPosition","bottom",1,"p-button-danger",2,"margin-right","5px",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"app-header",0),t.NdJ("toggleSidebar",function(a){return n.onToggleSidebar(a)}),t.qZA(),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"h1",3),t._uU(4,"Sponsor"),t.qZA(),t.qZA(),t.TgZ(5,"div",4),t.TgZ(6,"p-table",5,6),t.YNc(8,et,6,2,"ng-template",7),t.YNc(9,nt,4,1,"ng-template",8),t.YNc(10,st,26,16,"ng-template",9),t.qZA(),t._UZ(11,"ngx-ui-loader",10),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngClass",n.sidebarSpacing),t.xp6(5),t.Q6J("columns",n.cols)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("value",n.sponsorList)("responsive",!0)("globalFilterFields",t.DdM(10,at)),t.xp6(5),t.Q6J("fgsColor","#000000")("fgsType",n.fgsType))},directives:[_.G,y.mk,A.iA,v.jx,k.o,T.Hq,u.rH,y.sg,w.u,p.Eo],styles:["th[_ngcontent-%COMP%]{background-color:#285d91!important;color:#fff!important}td[_ngcontent-%COMP%]{text-align:center!important;font-size:200!important}"]}),o})();const dt=function(){return["/crm/sponsor"]};let L=(()=>{class o{constructor(e,n,i,a,d,g){this.fb=e,this.activateRoute=n,this.ngxLoader=i,this.route=a,this.toastr=d,this.CmsService=g,this.title=" ",this.editMode=!1,this.sponsorForm=this.fb.group({name:["",[s.kI.required]],email:["",[s.kI.required]],phone:["",[s.kI.required]],funding:["",[s.kI.required]],city:["",s.kI.required],street:["",s.kI.required],landmark:["",s.kI.required],state:["",s.kI.required],zip:["",s.kI.required],country:["",s.kI.required]})}ngOnInit(){this.fgsType=p.aS.squareLoader,this.ngxLoader.start(),this.sidebarSpacing="contracted",this.activateRoute.queryParamMap.subscribe(e=>{this.id=e.get("id"),this.id&&null!=this.id?(this.editMode=!0,this.title="Edit Sponsor",this.getSponsorDetailsById()):(this.editMode=!1,this.title="Add New Sponser")})}getSponsorDetailsById(){this.CmsService.getSponsorDetailsById(parseInt(this.id)).subscribe(e=>{this.sponsorForm.patchValue({id:e.id,name:e.name,email:e.email,phone:e.phone,funding:e.funding,city:e.address.city,street:e.address.street,landmark:e.address.landmark,state:e.address.state,zip:e.address.zip,country:e.address.country}),this.ngxLoader.stop()})}addSponsor(){this.CmsService.addSponsor({name:this.sponsorForm.controls.name.value,email:this.sponsorForm.controls.email.value,phone:this.sponsorForm.controls.phone.value,funding:this.sponsorForm.controls.funding.value,address:{city:this.sponsorForm.controls.city.value,street:this.sponsorForm.controls.street.value,landmark:this.sponsorForm.controls.landmark.value,state:this.sponsorForm.controls.state.value,zip:this.sponsorForm.controls.zip.value,country:this.sponsorForm.controls.country.value}}).subscribe(n=>{n&&(this.toastr.showSuccess("sponsor added successfully","sponsor Added"),this.ngxLoader.stop(),this.route.navigate(["/crm/sponsor"]))})}editSponsor(){this.CmsService.editSponsor({id:this.id,name:this.sponsorForm.controls.name.value,email:this.sponsorForm.controls.email.value,phone:this.sponsorForm.controls.phone_No.value,funding:this.sponsorForm.controls.funding.value,address:{city:this.sponsorForm.controls.city.value,street:this.sponsorForm.controls.street.value,landmark:this.sponsorForm.controls.landmark.value,state:this.sponsorForm.controls.state.value,zip:this.sponsorForm.controls.zip_code.value,country:this.sponsorForm.controls.country.value}},this.id).subscribe(n=>{n&&(this.toastr.showSuccess("sponsor edit successfully","sponsor edit"),this.ngxLoader.stop(),this.route.navigate(["/crm/sponsor"]))})}submitForm(){this.ngxLoader.start(),this.editMode?this.editSponsor():this.addSponsor()}onToggleSidebar(e){this.sidebarSpacing="open"===e?"contracted":"expanded"}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(s.qu),t.Y36(u.gz),t.Y36(p.LA),t.Y36(u.F0),t.Y36(C.$),t.Y36(S))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-edit-sponsor"]],decls:69,vars:5,consts:[[3,"toggleSidebar"],[1,"body","bcard",3,"ngClass"],[3,"formGroup"],[1,"card","col-sm-12"],[1,"row","gutters"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","col-12"],[1,"h-100","mt-5"],[1,"card-body"],[1,"mb-2","text-primary"],[1,"col-xl-6","col-lg-6","col-md-6","col-sm-6","col-12"],[1,"form-group"],["for","name"],["type","text","formControlName","name",1,"form-control"],["for","image"],["type","text","formControlName","email",1,"form-control"],["for","hyperlink"],["type","url","formControlName","phone",1,"form-control"],["for","Name"],["type","text","formControlName","funding",1,"form-control"],["type","text","formControlName","city",1,"form-control"],["type","text","formControlName","street",1,"form-control"],["type","text","formControlName","landmark",1,"form-control"],["type","text","formControlName","state",1,"form-control"],["type","text","formControlName","zip",1,"form-control"],["type","text","formControlName","country",1,"form-control"],[1,"row","gutters","mt-4"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","col-12","mt-4"],[1,"text-right"],["pButton","","type","button","id","submit","name","submit",1,"p-button-danger","mr-4",3,"routerLink"],["pButton","","type","button","id","submit","name","submit",1,"p-button-success",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"app-header",0),t.NdJ("toggleSidebar",function(a){return n.onToggleSidebar(a)}),t.qZA(),t.TgZ(1,"div",1),t.TgZ(2,"form",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.TgZ(6,"div",6),t.TgZ(7,"div",7),t.TgZ(8,"div",4),t.TgZ(9,"div",5),t.TgZ(10,"h6",8),t._uU(11),t.qZA(),t.qZA(),t.TgZ(12,"div",9),t.TgZ(13,"div",10),t.TgZ(14,"label",11),t._uU(15,"Name"),t.qZA(),t._UZ(16,"input",12),t.qZA(),t.qZA(),t.TgZ(17,"div",9),t.TgZ(18,"div",10),t.TgZ(19,"label",13),t._uU(20,"Email"),t.qZA(),t._UZ(21,"input",14),t.qZA(),t.qZA(),t.TgZ(22,"div",9),t.TgZ(23,"div",10),t.TgZ(24,"label",15),t._uU(25,"Phone No."),t.qZA(),t._UZ(26,"input",16),t.qZA(),t.qZA(),t.TgZ(27,"div",9),t.TgZ(28,"div",10),t.TgZ(29,"label",17),t._uU(30,"Funding"),t.qZA(),t._UZ(31,"input",18),t.qZA(),t.qZA(),t.TgZ(32,"div",9),t.TgZ(33,"div",10),t.TgZ(34,"label",17),t._uU(35,"City Name"),t.qZA(),t._UZ(36,"input",19),t.qZA(),t.qZA(),t.TgZ(37,"div",9),t.TgZ(38,"div",10),t.TgZ(39,"label",17),t._uU(40,"Street"),t.qZA(),t._UZ(41,"input",20),t.qZA(),t.qZA(),t.TgZ(42,"div",9),t.TgZ(43,"div",10),t.TgZ(44,"label",17),t._uU(45,"Landmark"),t.qZA(),t._UZ(46,"input",21),t.qZA(),t.qZA(),t.TgZ(47,"div",9),t.TgZ(48,"div",10),t.TgZ(49,"label",17),t._uU(50,"State"),t.qZA(),t._UZ(51,"input",22),t.qZA(),t.qZA(),t.TgZ(52,"div",9),t.TgZ(53,"div",10),t.TgZ(54,"label",17),t._uU(55,"Zip Code"),t.qZA(),t._UZ(56,"input",23),t.qZA(),t.qZA(),t.TgZ(57,"div",9),t.TgZ(58,"div",10),t.TgZ(59,"label",17),t._uU(60,"Country"),t.qZA(),t._UZ(61,"input",24),t.qZA(),t.qZA(),t.qZA(),t.TgZ(62,"div",25),t.TgZ(63,"div",26),t.TgZ(64,"div",27),t.TgZ(65,"button",28),t._uU(66,"Cancel"),t.qZA(),t.TgZ(67,"button",29),t.NdJ("click",function(){return n.submitForm()}),t._uU(68,"submit"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngClass",n.sidebarSpacing),t.xp6(1),t.Q6J("formGroup",n.sponsorForm),t.xp6(9),t.Oqu(n.title),t.xp6(54),t.Q6J("routerLink",t.DdM(4,dt)))},directives:[_.G,y.mk,s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,T.Hq,u.rH],styles:[""]}),o})();const lt=[{path:"category",component:Q},{path:"subcategory",component:K},{path:"sponsor",component:gt},{path:"editcategory",component:O},{path:"editsubcategory",component:U},{path:"editsponsor",component:L},{path:"addcategory",component:O},{path:"addsubcategory",component:U},{path:"addsponsor",component:L},{path:"slider",component:(()=>{class o{constructor(){}ngOnInit(){}onToggleSidebar(e){this.sidebarSpacing="open"===e?"contracted":"expanded"}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-slider1"]],decls:5,vars:1,consts:[[3,"toggleSidebar"],[1,"body","bcard",3,"ngClass"],[1,"page-heading"],[2,"text-align","center"]],template:function(e,n){1&e&&(t.TgZ(0,"app-header",0),t.NdJ("toggleSidebar",function(a){return n.onToggleSidebar(a)}),t.qZA(),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"h1",3),t._uU(4,"work in progress , comming soon...."),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngClass",n.sidebarSpacing))},directives:[_.G,y.mk],styles:[""]}),o})()}];let ct=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[u.Bz.forChild(lt)],u.Bz]}),o})();var pt=l(5115);let mt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[y.ez,ct,pt.m,s.u5,s.UX]]}),o})()}}]);