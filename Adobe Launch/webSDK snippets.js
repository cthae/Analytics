//get settings of all alloy instances
__alloyNS.forEach(alloy => window[alloy]("getLibraryInfo").then(response => console.log(response.libraryInfo)))
