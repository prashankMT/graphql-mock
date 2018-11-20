import casual from "casual";
import RandExp from "randexp";
import { MockList } from "graphql-tools";
import { startCase } from "lodash";

export default {
  ID: (_1, _2, _3, query) => query.variableValues.id ? query.variableValues.id : casual.integer(0),
  Int: () => casual.integer(0),
  String: ()=> casual.title,
  Library: ()=>({
    name: casual._full_name
  }),
  Comment: ()=>({
    text: casual.text
  }),
  User:()=>({
    name: casual.name,
    email: casual.email,
    pic: casual.url
  }),
  Account:()=>({
    name: casual.company_name
  }),
  Reaction:()=>({
    type: casual.type
  }),
  Recording:()=>({
    sharedWith: () => new MockList([3, 10]),
    libraries: () => new MockList([2, 10])
  })

};
