import { useGetCategoryQuery } from '@/store/api'
import React from 'react'

const Category = () => {
	const { data: category, error, isLoading } = useGetCategoryQuery()

	const skeletonArray = Array.from({ length: 5 })

	return (
		<section className=" py-6 max-w-[350px] ">

			<div className="max-h-96 overflow-y-auto pr-2">
				{isLoading &&
					skeletonArray.map((_, i) => (
						<div
							key={i}
							className="mb-[20px] border-b p-[10px_0px] animate-pulse"
						>
							<div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
						</div>
					))}

				{ category?.map(el => (
						<div key={el.id}>
							<h3 className="text-lg font-medium text-gray-500 dark:text-black mb-[20px] border-b p-[10px_0px]">
								{el.categoryName}
							</h3>
						</div>
					))}

				{error && (
					<p className="text-center text-red-500 mt-4">Ошибка загрузки категорий</p>
				)}
			</div>
		</section>
	)
}

export default Category
