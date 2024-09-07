//get settings of all alloy instances
__alloyNS.forEach(alloy => windowp[alloy]("getLibraryInfo").then(response => console.log(response.libraryInfo)))
