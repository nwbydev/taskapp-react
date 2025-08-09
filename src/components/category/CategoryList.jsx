import React, { useContext, useEffect } from 'react'
import { useCategory } from '../../hooks/useCategory'
import { Box, CircularProgress, Divider, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { CategoryContext } from '../../context/CategoryContext';
import UpdateCategoryButton from './UpdateCategoryButton';
import DeleteCategoryButton from './DeleteCategoryButton';
import { useTask } from '../../hooks/useTask';

const CategoryList = () => {

    const {getCategories,categories,isLoadingCategories,errorLoadingCategories} = useCategory();
    const {getTasksByCategory} = useTask();
    const {updateCategories} = useContext(CategoryContext);

    const handleClick = (category) => {
        getTasksByCategory(category.id);
    }

    useEffect(()=>{
        getCategories();
    },[updateCategories])

    if (isLoadingCategories) {
      return (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="10vh">
              <CircularProgress size={30}/>
          </Box>
      );
    };
    
    if (errorLoadingCategories) {
        return (
            <Box sx={{textAlign: "center"}}>
            <Typography>Error: {errorLoadingCategories.message}</Typography>
            </Box>
        );
    };

    if (categories.length === 0) {
        return (
            <Box sx={{textAlign: "center"}}>
            <Typography>No se encontraron categorias.</Typography>
            </Box>
        );
    };

  return (
    <>
        {categories.map((category) => (
            <React.Fragment key={category.id}>
                <ListItem
                    sx={{ p: 0 }}
                    secondaryAction={
                        <>
                            <UpdateCategoryButton category={category}/>
                            <DeleteCategoryButton category={category}/>
                        </>
                    }
                    alignItems="flex-start"
                >
                    <ListItemButton onClick={() => handleClick(category)}>
                        <ListItemText
                            primary={
                                <Typography 
                                    variant="body1" 
                                    noWrap
                                    sx={{
                                        maxWidth: '100%',
                                    }}
                                >
                                    {category.name}
                                </Typography>
                            }
                        />
                    </ListItemButton>
                </ListItem>
                <Divider />
            </React.Fragment>
        ))}
    </>
  )
}

export default CategoryList