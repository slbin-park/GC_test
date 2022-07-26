const SAVE_COMMUNITY = `

`

const SAVE_COMMUNITY_IMG = `
INSERT INTO
community_image(commu_id_fk, address)
VALUES ( ? , ? )
`

const SAVE_COMMUNITY_TAG = `
INSERT INTO
community_tag(commu_id_fk,tag_name)
VALUES ( ? , ? )
`


const GET_COMMUNITY = `
SELECT *
FROM community;
`

const GET_COMMUNITY_ID = `
SELECT *
FROM community
WHERE id = ?
`

export {
    SAVE_COMMUNITY,
    GET_COMMUNITY,
    GET_COMMUNITY_ID,
    SAVE_COMMUNITY_IMG,
    SAVE_COMMUNITY_TAG
}