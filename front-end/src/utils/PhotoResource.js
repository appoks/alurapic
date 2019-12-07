export default class PhotoResource {

constructor(resource) {

    this._resource = resource('v1/fotos{/id}');

}


list() {

    return this._resource.query().then(res => res.json());

}

add(photo) {

    return this._resource.save(photo)

}

remove(id) {

return this._resource.delete( { id } );

}

get(id) {

    return this._resource.get( { id } ).then( res => res.json());

}

edit() {}


}