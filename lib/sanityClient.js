import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'lv7tp7cq',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token:'skU2PNHXhkAjXrx8Qk3a17tPKjWvPiy4r19rd59dntB4jkeVjMowUEPCQ9cXkJuuht4wsvjUXn7SgwXOfklRrchm8knkg3j2YLNHe5xddmr3Mc60LXxJtgBkmwhN1JkrHc8nzOH0QjZowGmQA2UFxNFMO6RbpN0KbtUFjlRhVsCW8ES4XFg2',
    useCdn:false,
})