USE pets_DB;

SELECT * FROM tb_pets;

-- INSERIR PET--
INSERT INTO tb_pets(nm_pet)
	values ('Snow');
    
-- CONSULTAR TODOS PETS 	
SELECT  id_pet 		id,
		nm_pet 		nome
	FROM tb_pets;
