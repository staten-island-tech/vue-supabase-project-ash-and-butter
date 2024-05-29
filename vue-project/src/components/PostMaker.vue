
<script>
async function insertPost(post) {
    const { data, error } = await supabase
      .from('posts')
      .insert([post]);
  
    if (error) {
      console.error('Error inserting data:', error);
    } else {
      console.log('Data inserted successfully:', data);
    }
  }
  
  const post = {
    user_id: '12345',
    username: 'john_doe',
    image_url: 'https://example.com/image.jpg',
    caption: 'Enjoying the sunny day!',
    likes: 150,
    created_at: new Date().toISOString()
  };
  
  insertPost(post);
</script>